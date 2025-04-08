import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DealCard from './DealCard';
import styles from './Styles';
import { router } from 'expo-router';

const TrendingProducts = () => (
    <View style={[styles.trendingSection, { marginBottom: 20 }]}>
      <TouchableOpacity onPress={() => router.push("/(search)/")}>
        <Text style={styles.sectionTitle}>Trending Products</Text>
      </TouchableOpacity>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {[1, 2, 3].map((_, index) => (
          <DealCard 
            key={index} 
            title="Trending Item" 
            price="999" 
            discount="50%" 
            rating="4.5" 
          />
        ))}
      </ScrollView>
    </View>
);
    
export default TrendingProducts;