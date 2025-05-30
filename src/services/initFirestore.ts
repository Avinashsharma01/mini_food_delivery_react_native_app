/* eslint-disable no-trailing-spaces */
import { firestore } from './firebase';

export const initializeFirestore = async () => {
  try {
    // Check if Firestore is accessible
    const snapshot = await firestore.collection('foodItems').limit(1).get();
    
    // Log the connection status
    if (snapshot.empty) {
      console.log('Connected to Firestore. No food items found.');
    } else {
      console.log('Successfully connected to Firestore with existing data');
    }
    
    return true;
  } catch (error) {
    console.error('Error initializing Firestore:', error);
    return false;
  }
};
