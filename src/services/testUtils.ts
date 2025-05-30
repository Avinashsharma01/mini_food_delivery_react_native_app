/* eslint-disable no-trailing-spaces */
// /* eslint-disable no-trailing-spaces */
// import { firestore } from './firebase';
// import { mockFoodItems } from './mockData';

// // Testing utility to check Firebase connection
// export const testFirebaseConnection = async (): Promise<boolean> => {
//   try {
//     // Try to read from Firestore to test connection
//     await firestore.collection('test').doc('connection').set({
//       timestamp: new Date().toISOString(),
//       connected: true,
//     });
//     console.log('✅ Firebase connection successful');
//     return true;
//   } catch (error) {
//     console.error('❌ Firebase connection failed:', error);
//     return false;
//   }
// };

// // Testing utility to add all mock data to Firestore
// export const addAllMockData = async (): Promise<boolean> => {
//   try {
//     const batch = firestore.batch();
    
//     // Add food items
//     mockFoodItems.forEach((item) => {
//       const docRef = firestore.collection('foodItems').doc();
//       batch.set(docRef, item);
//     });
    
//     await batch.commit();
//     console.log('✅ Mock data added to Firestore successfully');
//     return true;
//   } catch (error) {
//     console.error('❌ Failed to add mock data to Firestore:', error);
//     return false;
//   }
// };

// // Testing utility to clear all data from Firestore
// export const clearAllData = async (): Promise<boolean> => {
//   try {
//     // WARNING: This will delete all data in the specified collections
//     const foodItemsSnapshot = await firestore.collection('foodItems').get();
//     const ordersSnapshot = await firestore.collection('orders').get();
    
//     const batch = firestore.batch();
    
//     foodItemsSnapshot.docs.forEach((doc) => {
//       batch.delete(doc.ref);
//     });
    
//     ordersSnapshot.docs.forEach((doc) => {
//       batch.delete(doc.ref);
//     });
    
//     await batch.commit();
//     console.log('✅ All data cleared from Firestore successfully');
//     return true;
//   } catch (error) {
//     console.error('❌ Failed to clear data from Firestore:', error);
//     return false;
//   }
// };

// // Usage example:
// /*
//   // Test Firebase connection
//   testFirebaseConnection()
//     .then((connected) => {
//       if (connected) {
//         // Add mock data if connection is successful
//         return addAllMockData();
//       }
//       return false;
//     })
//     .then((added) => {
//       console.log('Data added:', added);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// */
