// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwO6VU5OiG73NjeoAOUYpRC-iu9wGPmOo",
  authDomain: "inventory-management-366bd.firebaseapp.com",
  projectId: "inventory-management-366bd",
  storageBucket: "inventory-management-366bd.appspot.com",
  messagingSenderId: "515619709243",
  appId: "1:515619709243:web:f8902ca7809437bf2b171e",
  measurementId: "G-G8QR512QN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}