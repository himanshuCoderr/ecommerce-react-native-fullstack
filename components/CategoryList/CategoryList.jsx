import { ScrollView, View, Text, Image, TouchableNativeFeedback } from 'react-native';
import styles from '../Styles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            
            // Create a map to store unique categories with their thumbnails
            const categoryMap = new Map();
            
            querySnapshot.docs.forEach(doc => {
                const data = doc.data();
                if (data.category && data.thumbnail) {
                    // If this category isn't in our map yet, or if we want to update its thumbnail
                    if (!categoryMap.has(data.category)) {
                        categoryMap.set(data.category, {
                            categoryName: data.category,
                            imageUrl: data.thumbnail
                        });
                    }
                }
            });

            // Convert map to array
            const uniqueCategories = Array.from(categoryMap.values());
            setCategories(uniqueCategories);
        
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    }
  
    useEffect(() => {
        getCategories();
    }, []);

    const handleCategoryPress = (category) => {
        router.push({
            pathname: "/(search)",
            params: { category: category.categoryName }
        });
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
            {categories.map((category, index) => (
                <TouchableNativeFeedback 
                    onPress={() => handleCategoryPress(category)} 
                    key={index}
                >
                    <View style={styles.categoryItem}>
                        <Image
                            source={{ uri: category.imageUrl }}
                            style={styles.categoryImage}
                        />
                        <Text style={styles.categoryText}>{category.categoryName}</Text>
                    </View>
                </TouchableNativeFeedback>
            ))}
        </ScrollView>
    );
};

export default CategoryList;