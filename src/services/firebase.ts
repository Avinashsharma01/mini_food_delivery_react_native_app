/* eslint-disable quotes */
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Firebase configuration
// For demo purposes, we'll use a test configuration
// In a production app, these values should be in environment variables


const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export default firebase;

















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC4nj31CgH-bnpScQRg0UEOYHeHzToJJrQ",
//   authDomain: "react-native-44a53.firebaseapp.com",
//   projectId: "react-native-44a53",
//   storageBucket: "react-native-44a53.firebasestorage.app",
//   messagingSenderId: "699204800987",
//   appId: "1:699204800987:web:b83f3771276c62ea0a97fe",
//   measurementId: "G-M1Y7N5TXXY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
