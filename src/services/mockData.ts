/* eslint-disable no-trailing-spaces */
// Mock data for initializing Firestore for the Food Ordering App
// Use this data to populate your Firebase Firestore collection

// export const mockFoodItems = [
//   {
//     name: "Classic Burger",
//     description: "Juicy beef patty with lettuce, tomato, onions, pickles, and our special sauce on a toasted bun",
//     price: 8.99,
//     image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Main Course"
//   },
//   {
//     name: "Veggie Burger",
//     description: "Plant-based patty with avocado, sprouts, tomato, and vegan mayo on a whole grain bun",
//     price: 7.99,
//     image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Main Course"
//   },
//   {
//     name: "Chicken Sandwich",
//     description: "Grilled chicken breast with lettuce, tomato, and honey mustard on ciabatta bread",
//     price: 9.49,
//     image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Main Course"
//   },
//   {
//     name: "Cheese Pizza",
//     description: "Hand-tossed pizza with our special tomato sauce and a blend of mozzarella and cheddar cheeses",
//     price: 11.99,
//     image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Main Course"
//   },
//   {
//     name: "Caesar Salad",
//     description: "Crisp romaine lettuce, croutons, parmesan cheese, and our homemade Caesar dressing",
//     price: 6.99,
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Appetizers"
//   },
//   {
//     name: "French Fries",
//     description: "Crispy golden fries seasoned with our special blend of herbs and spices",
//     price: 3.99,
//     image: "https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Appetizers"
//   },
//   {
//     name: "Onion Rings",
//     description: "Thick-cut onion rings in a crispy beer batter served with our signature dipping sauce",
//     price: 4.49,
//     image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Appetizers"
//   },
//   {
//     name: "Chocolate Brownie",
//     description: "Rich, fudgy brownie served warm with vanilla ice cream and chocolate sauce",
//     price: 5.99,
//     image: "https://images.unsplash.com/photo-1589375890993-7b42278f2086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Desserts"
//   },
//   {
//     name: "Cheesecake",
//     description: "Creamy New York style cheesecake with a graham cracker crust and berry compote",
//     price: 6.49,
//     image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Desserts"
//   },
//   {
//     name: "Soda",
//     description: "Your choice of Coca-Cola, Diet Coke, Sprite, or Dr. Pepper",
//     price: 1.99,
//     image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Beverages"
//   },
//   {
//     name: "Iced Tea",
//     description: "Freshly brewed iced tea, sweetened or unsweetened",
//     price: 2.49,
//     image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Beverages"
//   },
//   {
//     name: "Milkshake",
//     description: "Hand-spun milkshake with real ice cream in chocolate, vanilla, or strawberry",
//     price: 4.99,
//     image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Beverages"
//   }
// ];

// Use this script to populate your Firestore database
// Copy and paste this in Firebase Console > Firestore > Rules
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if false;
    }
  }
}
*/

// To add this data to Firestore, use the following snippet:
/*
import { firestore } from './firebase';

const addMockDataToFirestore = async () => {
  try {
    const batch = firestore.batch();
    
    mockFoodItems.forEach((item) => {
      const docRef = firestore.collection('foodItems').doc();
      batch.set(docRef, item);
    });
    
    await batch.commit();
    console.log('Mock data successfully added to Firestore');
  } catch (error) {
    console.error('Error adding mock data to Firestore:', error);
  }
};

// Call this function once to populate your database
// addMockDataToFirestore();
*/
