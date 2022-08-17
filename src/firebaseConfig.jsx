// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvxWL_a-bKxugg5rD8ChWnuV4F04vEHHE",
  authDomain: "tecnopc-test.firebaseapp.com",
  projectId: "tecnopc-test",
  storageBucket: "tecnopc-test.appspot.com",
  messagingSenderId: "1037836940462",
  appId: "1:1037836940462:web:30587052139d5509a4a93f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;