// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-productos-c92f3.firebaseapp.com",
  projectId: "tienda-productos-c92f3",
  storageBucket: "tienda-productos-c92f3.appspot.com",
  messagingSenderId: "928531013009",
  appId: "1:928531013009:web:ea09702c1d4414c5564e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
