import { View, Text, TouchableOpacity, FlatList, Dimensions, Image, StyleSheet, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get("window");

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [promoProducts, setPromoProducts] = useState([]);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const getPromoProducts = async () => {
    try {
      console.log("Fetching promo products...");
      const productsRef = collection(db, "products");
      const q = query(
        productsRef,
        orderBy("discountPercentage", "desc"),
        limit(5)
      );

      const querySnapshot = await getDocs(q);
      console.log("Number of products found:", querySnapshot.size);
      
      const products = querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Product data:", data);
        return {
          id: doc.id,
          ...data
        };
      });
      
      setPromoProducts(products);
    } catch (error) {
      console.error("Error fetching promo products:", error);
    }
  };

  useEffect(() => {
    getPromoProducts();
  }, []);

  const renderItem = ({ item, index }) => {
    if (!item) return null;

    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[
        styles.cardContainer,
        {
          transform: [{ scale }],
          opacity,
        }
      ]}>
        <LinearGradient
          colors={['black', 'white']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.textContainer}>
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>
                  {item.discountPercentage ? `${Math.round(item.discountPercentage)}% OFF` : 'Special Offer'}
                </Text>
              </View>
              <Text style={styles.subtitle}>{item.title || item.name || 'Product'}</Text>
              <Text style={styles.priceText}>₹{item.price || '0'}</Text>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push(`/product/${item.id}`)}
              >
                <Text style={styles.buttonText}>Shop Now</Text>
                <Text style={styles.buttonArrow}>→</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
              <Image 
                source={{ 
                  uri: item.thumbnail || 'https://via.placeholder.com/140'
                }} 
                style={styles.image} 
                resizeMode="cover" 
              />
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    );
  };

  if (promoProducts.length === 0) {
    return (
      <View style={[styles.banner, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading promotions...</Text>
      </View>
    );
  }

  return (
    <View style={styles.banner}>
      <Animated.FlatList 
        data={promoProducts} 
        ref={flatListRef} 
        showsHorizontalScrollIndicator={false}  
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id} 
        renderItem={renderItem} 
        horizontal={true}
        pagingEnabled={true}
        snapToInterval={width}
        decelerationRate="fast"
        initialNumToRender={5}
      />

      <View style={styles.indicatorContainer}>
        {promoProducts.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.2, 0.8],
            extrapolate: 'clamp',
          });
          
          return (
            <Animated.View
              key={i}
              style={[
                styles.indicator,
                {
                  backgroundColor: i === activeIndex ? '#FF6B6B' : 'rgba(255, 107, 107, 0.3)',
                  transform: [{ scale }]
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginVertical: 15,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  cardContainer: {
    width: width,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    height: 200,
    width: '100%',
  },
  contentWrapper: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  textContainer: {
    flex: 0.6,
    paddingRight: 10,
    justifyContent: 'space-between',
    height: '100%',
  },
  discountBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  discountBadgeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '700',
    marginVertical: 4,
  },
  priceText: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: '800',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonArrow: {
    color: '#FF6B6B',
    fontSize: 18,
    fontWeight: '700',
  },
  imageContainer: {
    flex: 0.4,
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default Banner;
