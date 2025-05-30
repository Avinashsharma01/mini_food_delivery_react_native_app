/* eslint-disable no-trailing-spaces */
import firebase from 'firebase/compat/app';
import { firestore } from './firebase';
import { FoodItem, Order, CartItem } from './types';

// Get all food items from Firestore
export const getFoodItems = async (): Promise<FoodItem[]> => {
  try {
    console.log('Fetching all food items from Firestore...');
    const snapshot = await firestore.collection('foodItems').get();
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as FoodItem));
    console.log(`Successfully fetched ${items.length} food items from Firestore`);
    return items;
  } catch (error) {
    console.error('Error getting food items:', error);
    throw error;
  }
};

// Get food items by category
export const getFoodItemsByCategory = async (category: string): Promise<FoodItem[]> => {
  try {
    console.log(`Fetching food items from Firestore for category: ${category}`);
    const snapshot = await firestore
      .collection('foodItems')
      .where('category', '==', category)
      .get();
    
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as FoodItem));
    
    console.log(`Successfully fetched ${items.length} items for category: ${category}`);
    return items;
  } catch (error) {
    console.error('Error getting food items by category:', error);
    throw error;
  }
};

// Place a new order
export const placeOrder = async (orderItems: CartItem[], totalPrice: number): Promise<string> => {
  try {
    const orderData = {
      items: orderItems,
      totalPrice,
      status: 'pending',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    
    console.log('Placing new order in Firestore...');
    const orderRef = await firestore.collection('orders').add(orderData);
    console.log(`Order successfully placed with ID: ${orderRef.id}`);
    return orderRef.id;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

// Get orders by user (if we implement user authentication later)
export const getOrders = async (): Promise<Order[]> => {
  try {
    const snapshot = await firestore
      .collection('orders')
      .orderBy('timestamp', 'desc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as Order));
  } catch (error) {
    console.error('Error getting orders:', error);
    throw error;
  }
};
