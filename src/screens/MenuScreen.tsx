/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../navigation/AppNavigator';
import FoodItemCard from '../components/FoodItemCard';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';
import {getFoodItems, getFoodItemsByCategory} from '../services/firestore';
import {FoodItem} from '../services/types';

type MenuScreenProps = StackScreenProps<StackParamList, 'Menu'>;

const categories = [
  'All',
  'Main Course',
  'Appetizers',
  'Desserts',
  'Beverages',
];

const MenuScreen: React.FC<MenuScreenProps> = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchFoodItems = async () => {
    try {
      setLoading(true);
      setError(null);
      let items: FoodItem[];

      if (selectedCategory === 'All') {
        items = await getFoodItems();
      } else {
        items = await getFoodItemsByCategory(selectedCategory);
      }

      setFoodItems(items);
    } catch (err) {
      setError('Failed to load menu items. Please try again later.');
      console.error('Error fetching food items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, [selectedCategory]);

  const renderCategoryButton = (category: string) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory(category)}>
      <Text
        style={[
          styles.categoryButtonText,
          selectedCategory === category && styles.selectedCategoryButtonText,
        ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
  if (loading) {
    return <LoadingIndicator message="Loading menu from Firebase..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchFoodItems} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => renderCategoryButton(item)}
          contentContainerStyle={styles.categoriesList}
          scrollEnabled={true}
          extraData={selectedCategory}
        />
      </View>

      {foodItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items found in this category</Text>
        </View>
      ) : (
        <FlatList
          data={foodItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => <FoodItemCard item={item} />}
          contentContainerStyle={styles.foodItemsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedCategoryButton: {
    backgroundColor: '#FF6347',
    borderColor: '#FF6347',
  },
  categoryButtonText: {
    color: '#666',
    fontWeight: '500',
  },
  selectedCategoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  foodItemsList: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default MenuScreen;
