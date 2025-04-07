import { ScrollView, View, Text, Image } from 'react-native';
import styles from '../Styles';
const CategoryList = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
            {["Beauty", "Fashion", "Kids", "Mens", "Womens"].map((category, index) => (
                <View key={index} style={styles.categoryItem}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" }} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default CategoryList;