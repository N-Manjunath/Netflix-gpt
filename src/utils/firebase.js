// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gLgW9H6rcL4AhG1xSK38ARRF9zRDSyE",
  authDomain: "netflixgpt-1612.firebaseapp.com",
  projectId: "netflixgpt-1612",
  storageBucket: "netflixgpt-1612.firebasestorage.app",
  messagingSenderId: "296952412026",
  appId: "1:296952412026:web:e9e46ab1ee062a593bc8c3",
  measurementId: "G-28F7VRN41L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();