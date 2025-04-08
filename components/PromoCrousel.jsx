import { View, Text, TouchableOpacity, FlatList, Dimensions, Image, StyleSheet } from 'react-native';
import { useState , useRef } from 'react';

const data = [
  {
    id: '1',
    title: '50-40% OFF',
    subtitle: 'Now in (product)\nAll colours',
    buttonText: 'Shop Now',
    image: {
      uri: "https://images.unsplash.com/photo-1611403570720-162d8829689a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmZXJzfGVufDB8fDB8fHww",
    },
  },
  {
    id: '2',
    title: '20-40% OFF',
    subtitle: 'Now in (product)\nAll colours',
    buttonText: 'Shop Now',
    image: {
      uri: "https://images.unsplash.com/photo-1611403570720-162d8829689a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmZXJzfGVufDB8fDB8fHww",
    },
  },
];
const { width } = Dimensions.get("window");


const Banner = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card} >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.buttonText} →</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
    );
  };

  return (
    <View style={styles.banner}>
      <FlatList data={data} ref={flatListRef} showsHorizontalScrollIndicator={false}  onScroll={(e) => {
        setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / width));
      }} keyExtractor={(item) => item.id} renderItem={renderItem} horizontal={true} />

      <View style={styles.indicatorContainer}>
        {data.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => {
            setActiveIndex(i);
            flatListRef.current.scrollToIndex({ index: i, animated: true });
          }}>
            <View
              style={[
              styles.indicator,
              { backgroundColor: i === activeIndex ? '#E47C99' : '#ccc' },
            ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width,
    flexDirection: 'row',
    backgroundColor: '#FBCFD7',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default Banner;
