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
export default function Home() {
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
          <TouchableNativeFeedback onPress={() => router.push("/(sample)/")}>
            <Text > Go SAMPLE</Text>
          </TouchableNativeFeedback>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DealCard title="Women Printed Kurta" price="1500" discount="40%" rating="4.5" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            <DealCard title="HRX Sneakers" price="2499" discount="50%" rating="4.7" />
            
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


