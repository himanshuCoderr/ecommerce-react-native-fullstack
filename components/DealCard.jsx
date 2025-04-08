import { View, Text, Image } from 'react-native';
import styles from './Styles';

const DealCard = ({ title, price, discount, rating }) => (
    <View style={styles.dealCard}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D" }} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.price}>₹{price} <Text style={styles.discount}>{discount} OFF</Text></Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
    </View>
);

export default DealCard;