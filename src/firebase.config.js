import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAYACpLsmngYGJY-EDLsMoVUbNA5YMaWU",
  authDomain: "house-marketplace-app-bd264.firebaseapp.com",
  projectId: "house-marketplace-app-bd264",
  storageBucket: "house-marketplace-app-bd264.appspot.com",
  messagingSenderId: "182824540012",
  appId: "1:182824540012:web:1ca706414e1c5afce84549",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
