/* eslint-disable no-trailing-spaces */
// Firebase Data Implementation Note
// 
// This app initially used local mock data that would be uploaded to Firebase
// Firestore if the collection was empty. We have now transitioned to using
// Firebase Firestore exclusively.
//
// The app now:
// 1. Connects to Firebase Firestore on startup
// 2. Fetches food items from the 'foodItems' collection
// 3. Filters food items by category as needed
// 4. Saves orders to the 'orders' collection
//
// If you need to reset or change the data in Firebase, you can use the Firebase
// console or create a utility script to update the collections.

import { firestore } from './firebase';

export const checkFirestoreData = async (): Promise<void> => {
  try {
    // Check categories present
    const snapshot = await firestore.collection('foodItems').get();
    
    if (snapshot.empty) {
      console.log('Warning: No food items found in Firestore.');
      return;
    }
    
    const items = snapshot.docs.map(doc => doc.data());
    const categories = new Set(items.map(item => item.category));
    
    console.log('Available categories:', Array.from(categories));
    console.log(`Total food items: ${items.length}`);
  } catch (error) {
    console.error('Error checking Firestore data:', error);
  }
};
