import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../Styles";
import { router } from "expo-router";

export default function ProductCard({ image, title, description, price, rating, id }) {
    const handleProductPress = () => {
        router.push({
            pathname: "/(productDetails)/",
            params: {
                id,
                image,
                title,
                description,
                price,
                rating
            }
        });
    };

    return (
        <TouchableOpacity style={styles.productCard} onPress={handleProductPress}>
            <Image 
                source={{ uri: image }} 
                style={styles.productImage}
                resizeMode="cover"
            />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={1}>
                    {title || "Black Winter..."}
                </Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                    {description || "Autumn And Winter Casual cotton-padded jacket..."}
                </Text>
                <View style={styles.productDetails}>
                    <Text style={styles.productPrice}>₹{price || "499"}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>★★★★☆ {rating || "6,890"}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
