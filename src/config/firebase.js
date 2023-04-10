// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBX7v-4UD74cieZoZFjuI5dL5t_JdoceYY",
  authDomain: "agearle-7afda.firebaseapp.com",
  projectId: "agearle-7afda",
  storageBucket: "agearle-7afda.appspot.com",
  messagingSenderId: "292456880841",
  appId: "1:292456880841:web:85e1a8ae3623784c628b18",
  measurementId: "G-0FM6RFBXMX"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);