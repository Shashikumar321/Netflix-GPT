// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAziFuHJ21Zdhym_Pbe3D0BNm6KZnVX7NA",
  authDomain: "netflix-gpt-bb738.firebaseapp.com",
  projectId: "netflix-gpt-bb738",
  storageBucket: "netflix-gpt-bb738.firebasestorage.app",
  messagingSenderId: "26190623644",
  appId: "1:26190623644:web:3b052acbab5a87569a8e59",
  measurementId: "G-9Z6ET634X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

