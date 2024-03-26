// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMqXBGwwOLJDCr2gWFSN54RiclhRErJo",
  authDomain: "twitter-fact-check.firebaseapp.com",
  projectId: "twitter-fact-check",
  storageBucket: "twitter-fact-check.appspot.com",
  messagingSenderId: "152859518941",
  appId: "1:152859518941:web:76bcfcf6e7c21b21c5b834"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)