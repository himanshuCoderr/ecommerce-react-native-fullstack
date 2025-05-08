import * as React from 'react'
import { Alert, Button, Text, TouchableNativeFeedback, View } from "react-native";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import BottomBar from "@/components/BottomBar/BottomBar";
import CategoryList from "@/components/CategoryList/CategoryList";
import PromoCrousel from "@/components/PromoCrousel";
import DealCard from "@/components/DealCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrendingProducts from "@/components/TrendingProduct";
import { ScrollView } from "react-native";
import styles from '../../components/Styles';
import { router } from 'expo-router';
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';

export default function Home() {
  const [discountedProducts, setDiscountedProducts] = React.useState([]);

  async function getDiscountedProducts() {
    try {
      const productsRef = collection(db, "products");
      const q = query(
        productsRef,
        where("discountPercentage", ">=", 18),
        orderBy("discountPercentage", "desc"),
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setDiscountedProducts(products);
    } catch (error) {
      console.error("Error fetching discounted products:", error);
    }
  }

  React.useEffect(() => {
    getDiscountedProducts();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView 
        style={[styles.container, { paddingBottom: 90 }]}
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ 
          backgroundColor: "#FDFDFD", 
          width: "100%", 
          position: "relative",
          paddingBottom: 20
        }}>
          <View style={{ padding: 20, backgroundColor: "#FDFDFD" }}>
            <Navbar />
            <SearchBar />
          </View>
          <CategoryList />
          <PromoCrousel />
          <Text style={styles.sectionTitle}>Deal of the Day</Text>
        
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {discountedProducts.map((product) => (
              <DealCard 
                key={product.id}
                title={product.title || product.name}
                price={product.price}
                image={product.thumbnail}
                discount={`${product.discountPercentage}%`}
                rating={product.rating}
                brand={product.brand}
                stock={product.stock}
              />
            ))}
          </ScrollView>
          <SpecialOffer />
          <TrendingProducts />
          <PromoCrousel />  
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}


