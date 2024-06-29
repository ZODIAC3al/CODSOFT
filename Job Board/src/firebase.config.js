// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkMtUqZOI-EWpqclePBBwyRq1ed7kSF3c",
  authDomain: "online-job-portal-54143.firebaseapp.com",
  projectId: "online-job-portal-54143",
  storageBucket: "online-job-portal-54143.appspot.com",
  messagingSenderId: "674762304092",
  appId: "1:674762304092:web:810d505b5b1e6992745499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
