import * as React from 'react'
import { Alert, Button, Text, View } from "react-native";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import BottomBar from "@/components/BottomBar/BottomBar";
import CategoryList from "@/components/CategoryList/CategoryList";
import DealCard from "@/components/DealCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrendingProducts from "@/components/TrendingProduct";
import { ScrollView } from "react-native";
import Home from './(home)/index'
import LoginScreen from './(login)/index'
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <LoginScreen />
    </View>
  );
}


