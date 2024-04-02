// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDc1KXgvNGrMn4Voty0pcYQ8MByuhOns8A",
    authDomain: "lab6-js4.firebaseapp.com",
    projectId: "lab6-js4",
    storageBucket: "lab6-js4.appspot.com",
    messagingSenderId: "84203430442",
    appId: "1:84203430442:web:c41b521b7e0f31b0fd1953",
    measurementId: "G-7YDK4SQ56Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export  const database = getDatabase(app);