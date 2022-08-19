// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApsPvoZlxnRuBkVULJRdA6MX-_61mYnv0",
  authDomain: "tecnopc-uy.firebaseapp.com",
  projectId: "tecnopc-uy",
  storageBucket: "tecnopc-uy.appspot.com",
  messagingSenderId: "698187273851",
  appId: "1:698187273851:web:5e612c319fd6d607c6b4de",
  measurementId: "G-69DQ3TBSMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;