import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DealCard from './DealCard';
import styles from './Styles';
import { router } from 'expo-router';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';
import { useState, useEffect } from 'react';

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  async function getTrendingProducts() {
    try {
      const productsRef = collection(db, "products");
      const q = query(
        productsRef,
        where("rating", ">=", 4),
        orderBy("rating", "desc"),
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setTrendingProducts(products);
    } catch (error) {
      console.error("Error fetching trending products:", error);
    }
  }

  useEffect(() => {
    getTrendingProducts();
  }, []);

  return (
    <View style={[styles.trendingSection, { marginBottom: 20 }]}>
      <TouchableOpacity onPress={() => router.push("/(search)/")}>
        <Text style={styles.sectionTitle}>Trending Products</Text>
      </TouchableOpacity>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {trendingProducts.map((product) => (
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
    </View>
  );
};
    
export default TrendingProducts;