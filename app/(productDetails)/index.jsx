import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import BottomBar from "@/components/BottomBar/BottomBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import { router, useLocalSearchParams } from "expo-router";
import { doc, getDoc, collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

function ProductDetails() {
    const params = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState('7UK');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (params.id) {
                try {
                    const docRef = doc(db, "products", params.id);
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        setProduct({ id: docSnap.id, ...docSnap.data() });
                        
                        // Fetch similar products
                        const productsRef = collection(db, "products");
                        const q = query(
                            productsRef,
                            where("category", "==", docSnap.data().category),
                            where("id", "!=", docSnap.id),
                            limit(4)
                        );
                        
                        const similarSnapshot = await getDocs(q);
                        const similarData = similarSnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setSimilarProducts(similarData);
                    }
                } catch (error) {
                    console.error("Error fetching product details:", error);
                }
            } else {
                // If no ID is provided, use the params directly
                setProduct(params);
                
                // Fetch similar products if category is available
                if (params.category) {
                    try {
                        const productsRef = collection(db, "products");
                        const q = query(
                            productsRef,
                            where("category", "==", params.category),
                            limit(4)
                        );
                        
                        const similarSnapshot = await getDocs(q);
                        const similarData = similarSnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setSimilarProducts(similarData);
                    } catch (error) {
                        console.error("Error fetching similar products:", error);
                    }
                }
            }
            setLoading(false);
        };

        fetchProductDetails();
    }, [params.id]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading product details...</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found</Text>
            </View>
        );
    }

    // const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Product Images Carousel */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image || product.thumbnail }}
                        style={styles.productImage}
                        resizeMode="cover"
                    />
                    <View style={styles.dotIndicators}>
                        {[0, 1, 2, 3, 4].map((index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    currentImageIndex === index && styles.activeDot
                                ]}
                            />
                        ))}
                    </View>
                </View>

                {/* Product Info */}
                <View style={styles.infoContainer}>
                    <Text style={styles.selectedSize}>Size: {selectedSize}</Text>

                    {/* Size Selection */}
                    {/* <View style={styles.sizeContainer}>
                        {sizes.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeButton,
                                    selectedSize === size && styles.selectedSizeButton
                                ]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSize === size && styles.selectedSizeText
                                ]}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View> */}

                    {/* Product Title and Rating */}
                    <Text style={styles.title}>{product.title || product.name}</Text>
                    <Text style={styles.subtitle}>{product.description}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>★★★★☆ {product.rating}</Text>
                    </View>

                    {/* Price */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>₹{product.price}</Text>
                        {product.originalPrice && (
                            <>
                                <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
                                <Text style={styles.discount}>
                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                                </Text>
                            </>
                        )}
                    </View>

                    {/* Product Details */}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsTitle}>Product Details</Text>
                        <Text style={styles.detailsText}>
                            {product.description}
                            <Text style={styles.moreText}> More</Text>
                        </Text>
                    </View>

                    {/* Store and Policy Icons */}
                    <View style={styles.iconContainer}>
                        <View style={styles.iconItem}>
                            <Text style={styles.iconText}>Nearest Store</Text>
                        </View>
                        <View style={styles.iconItem}>
                            <Text style={styles.iconText}>VIP</Text>
                        </View>
                        <View style={styles.iconItem}>
                            <Text style={styles.iconText}>Return policy</Text>
                        </View>
                    </View>

                    {/* Delivery Info */}
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.deliveryText}>Delivery in</Text>
                        <Text style={styles.deliveryTime}>1 within Hour</Text>
                    </View>

                    {/* Bottom Actions */}
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.similarButton}>
                            <Text style={styles.actionText}>View Similar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.compareButton}>
                            <Text style={styles.actionText}>Add to Compare</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Similar Products Section */}
                {similarProducts.length > 0 && (
                    <View style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        borderTopWidth: 8,
                        borderTopColor: '#f5f5f5'
                    }}>
                        <Text style={{ 
                            fontSize: 18, 
                            fontWeight: "bold",
                            marginBottom: 15
                        }}>
                            Similar Products
                        </Text>
                        
                        <View style={{ 
                            flexDirection: "row", 
                            flexWrap: "wrap",
                            gap: 10,
                            justifyContent: "space-between"
                        }}>
                            {similarProducts.map((similarProduct) => (
                                <View key={similarProduct.id} style={{ width: '48%' }}>
                                    <ProductCard
                                        id={similarProduct.id}
                                        image={similarProduct.thumbnail}
                                        title={similarProduct.title || similarProduct.name}
                                        description={similarProduct.description}
                                        price={similarProduct.price}
                                        rating={similarProduct.rating}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                {/* Bottom Buttons */}
                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.buttonText}>Go to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buyButton} 
                        onPress={() => router.push("/(cart)/")}
                    >
                        <Text style={styles.buyButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 20,
                    paddingHorizontal: 20
                }}>
                    <View style={{ flexDirection: "column", gap: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Similar Products</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>52,000+ Products</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                backgroundColor: "white",
                                borderRadius: 10,
                                padding: 10,
                                elevation: 2,  // Add shadow for Android
                                shadowColor: '#000',  // Add shadow for iOS
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
            </ScrollView>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
    },
    imageContainer: {
        height: 400,
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    dotIndicators: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#E47C99',
    },
    infoContainer: {
        padding: 20,
    },
    selectedSize: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    sizeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    sizeButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D9D9D9',
    },
    selectedSizeButton: {
        backgroundColor: '#E47C99',
        borderColor: '#E47C99',
    },
    sizeText: {
        color: '#333',
    },
    selectedSizeText: {
        color: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    ratingContainer: {
        marginBottom: 15,
    },
    rating: {
        fontSize: 16,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
    },
    originalPrice: {
        fontSize: 18,
        color: '#666',
        textDecorationLine: 'line-through',
        marginRight: 10,
    },
    discount: {
        fontSize: 16,
        color: '#E47C99',
    },
    detailsContainer: {
        marginBottom: 20,
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    moreText: {
        color: '#E47C99',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    iconItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
    iconText: {
        fontSize: 12,
        color: '#666',
    },
    deliveryContainer: {
        backgroundColor: '#FFE8EC',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    deliveryText: {
        fontSize: 14,
        color: '#666',
    },
    deliveryTime: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    similarButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    compareButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    actionText: {
        color: '#666',
    },
    bottomButtons: {
        flexDirection: 'row',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        backgroundColor: 'white',
    },
    cartButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E47C99',
        borderRadius: 8,
        marginRight: 10,
    },
    buyButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#E47C99',
        borderRadius: 8,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    buttonText: {
        color: '#E47C99',
        fontWeight: 'bold',
    },
    buyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProductDetails;