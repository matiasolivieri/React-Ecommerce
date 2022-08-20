// Importaciones para Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuracion para iniciar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApsPvoZlxnRuBkVULJRdA6MX-_61mYnv0",
  authDomain: "tecnopc-uy.firebaseapp.com",
  projectId: "tecnopc-uy",
  storageBucket: "tecnopc-uy.appspot.com",
  messagingSenderId: "698187273851",
  appId: "1:698187273851:web:5e612c319fd6d607c6b4de",
  measurementId: "G-69DQ3TBSMS"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;