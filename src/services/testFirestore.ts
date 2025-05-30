/* eslint-disable no-trailing-spaces */
// /* eslint-disable no-trailing-spaces */
// // This file is for testing the Firestore connection and data retrieval
// import { firestore } from './firebase';
// import { FoodItem } from './types';

// export const testFirestoreConnection = async (): Promise<void> => {
//   try {
//     console.log('Testing Firestore connection...');
//     const snapshot = await firestore.collection('foodItems').get();
    
//     if (snapshot.empty) {
//       console.log('No food items found in Firestore. The collection exists but is empty.');
//     } else {
//       console.log(`Successfully retrieved ${snapshot.docs.length} food items from Firestore:`);
      
//       snapshot.docs.forEach((doc, index) => {
//         const item = { id: doc.id, ...doc.data() } as FoodItem;
//         console.log(`${index + 1}. ${item.name} - ${item.category} - $${item.price}`);
//       });
//     }
//   } catch (error) {
//     console.error('Error testing Firestore connection:', error);
//   }
// };
