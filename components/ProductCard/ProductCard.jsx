import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../Styles";

export default function ProductCard({ image, title, description, price, rating }) {
    return (
        <TouchableOpacity style={styles.productCard}>
            <Image 
                source={ {uri: "https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"}} 
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
