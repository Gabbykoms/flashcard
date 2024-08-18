// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFireBase} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0tWV6mX46TMHyQ3k88mvZTodRMf8Tik",
  authDomain: "flashcard-dd048.firebaseapp.com",
  projectId: "flashcard-dd048",
  storageBucket: "flashcard-dd048.appspot.com",
  messagingSenderId: "1009282927434",
  appId: "1:1009282927434:web:36be5d5881c9f609818fb3",
  measurementId: "G-FERMGLP44L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireBase

export {db}