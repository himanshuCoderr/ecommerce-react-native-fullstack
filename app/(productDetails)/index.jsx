import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';
import BottomBar from "@/components/BottomBar/BottomBar";
function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState('7UK');
    const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Product Images Carousel */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D" }}
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
                    <View style={styles.sizeContainer}>
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
                    </View>

                    {/* Product Title and Rating */}
                    <Text style={styles.title}>Nike Sneakers</Text>
                    <Text style={styles.subtitle}>Vision Alta Men's Shoes Size (All Colours)</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>★★★★☆ 56,890</Text>
                    </View>

                    {/* Price */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>₹1,500</Text>
                        <Text style={styles.originalPrice}>₹2,999</Text>
                        <Text style={styles.discount}>50% Off</Text>
                    </View>

                    {/* Product Details */}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsTitle}>Product Details</Text>
                        <Text style={styles.detailsText}>
                            Perhaps the most iconic sneaker of all-time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the...
                            <Text style={styles.moreText}>More</Text>
                        </Text>
                    </View>

                    {/* Store and Policy Icons */}
                    <View style={styles.iconContainer}>
                        <View style={styles.iconItem}>
                            {/* <Image source={require('../../assets/images/store-icon.png')} style={styles.icon} /> */}
                            <Text style={styles.iconText}>Nearest Store</Text>
                        </View>
                        <View style={styles.iconItem}>
                            {/* <Image source={require('../../assets/images/vip-icon.png')} style={styles.icon} /> */}
                            <Text style={styles.iconText}>VIP</Text>
                        </View>
                        <View style={styles.iconItem}>
                            {/* <Image source={require('../../assets/images/return-icon.png')} style={styles.icon} /> */}
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
                            {/* <Image source={require('../../assets/images/eye-icon.png')} style={styles.actionIcon} /> */}
                            <Text style={styles.actionText}>View Similar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.compareButton}>
                            {/* <Image source={require('../../assets/images/compare-icon.png')} style={styles.actionIcon} /> */}
                            <Text style={styles.actionText}>Add to Compare</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.cartButton}>
                        {/* <Image source={require('../../assets/images/cart-icon.png')} style={styles.buttonIcon} /> */}
                        <Text style={styles.buttonText}>Go to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* Bottom Buttons */}
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