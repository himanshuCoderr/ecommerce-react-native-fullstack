import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';

const DealCard = ({ title, price, discount, rating, image, brand, stock }) => (
    <TouchableOpacity style={styles.dealCard}>
        <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>{discount}</Text>
        </View>
        <Image 
            source={{ uri: image }} 
            style={styles.productImage}
            resizeMode="cover"
        />
        <View style={styles.productInfo}>
            {brand && <Text style={styles.brandName}>{brand}</Text>}
            <Text style={styles.productTitle} numberOfLines={2}>{title}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>₹{price}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐ {rating}</Text>
                </View>
            </View>
            <View style={styles.bottomInfo}>
                <Text style={styles.discount}>{discount} OFF</Text>
                {stock <= 10 && stock > 0 && (
                    <Text style={styles.stockWarning}>Only {stock} left!</Text>
                )}
                {stock === 0 && (
                    <Text style={styles.outOfStock}>Out of Stock</Text>
                )}
            </View>
        </View>
    </TouchableOpacity>
);

export default DealCard;