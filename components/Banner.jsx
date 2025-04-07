import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
const Banner = () => (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>50-40% OFF</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Shop Now</Text></TouchableOpacity>
    </View>
  );
  
export default Banner;
