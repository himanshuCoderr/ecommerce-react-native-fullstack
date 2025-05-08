import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../components/Styles";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

export default function Search() {
    const { category } = useLocalSearchParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productsRef = collection(db, "products");
                let q = productsRef;
                
                if (category) {
                    q = query(productsRef, where("category", "==", category));
                }
                
                const querySnapshot = await getDocs(q);
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
            <ScrollView
                style={[styles.container]}
                contentContainerStyle={{
                    paddingBottom: 120,
                    backgroundColor: "#FDFDFD"
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    width: "100%",
                    padding: 20
                }}>
                    <Navbar />
                    <SearchBar />

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {category ? `${category} Products` : 'All Products'} ({products.length})
                        </Text>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                    padding: 10,
                                    elevation: 2,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sort</Text>
                                <Image source={require("../../assets/images/sort-icon.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                    padding: 10,
                                    elevation: 2,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filter</Text>
                                <Image source={require("../../assets/images/filter-icon.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {loading ? (
                        <View style={{ padding: 20 }}>
                            <Text>Loading products...</Text>
                        </View>
                    ) : (
                        <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    image={product.thumbnail || "https://via.placeholder.com/150"}
                                    title={product.title || product.name}
                                    description={product.description}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            ))}
                            {products.length === 0 && (
                                <View style={{ padding: 20, width: "100%", alignItems: "center" }}>
                                    <Text>No products found in this category.</Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    );
}