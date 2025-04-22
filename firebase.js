// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAznHCLXryr_2L1920JX78vPiB61-s315k",
  authDomain: "ecommerce-react-native-f3074.firebaseapp.com",
  projectId: "ecommerce-react-native-f3074",
  storageBucket: "ecommerce-react-native-f3074.firebasestorage.app",
  messagingSenderId: "765841646916",
  appId: "1:765841646916:web:5f9054d0c9e005ad4ea311",
  measurementId: "G-RTL8GTCYYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };