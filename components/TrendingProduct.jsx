import { View, Text, ScrollView } from 'react-native';
import DealCard from './DealCard';
import styles from './Styles';
const TrendingProducts = () => (
    <View style={styles.trendingSection}>
      <Text style={styles.sectionTitle}>Trending Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3].map((_, index) => (
          <DealCard key={index} title="Trending Item" price="999" discount="50%" rating="4.5" />
        ))}
      </ScrollView>
    </View>
  );
    
export default TrendingProducts;