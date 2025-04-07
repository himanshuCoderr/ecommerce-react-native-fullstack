import { View, Text, Image } from 'react-native';
import styles from './Styles';
const DealCard = ({ title, price, discount, rating }) => (
    <View style={styles.dealCard}>
      <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.price}>₹{price} <Text style={styles.discount}>{discount} OFF</Text></Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
    </View>
  );

export default DealCard;