// Firebase Credential, DO NOT TOUCH

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHXFTHl_13MIYYr4eQOwOHcsB7do-dwU",
  authDomain: "ema-jhon-auth-arifuddin.firebaseapp.com",
  projectId: "ema-jhon-auth-arifuddin",
  storageBucket: "ema-jhon-auth-arifuddin.appspot.com",
  messagingSenderId: "587703571547",
  appId: "1:587703571547:web:6aa1e772d21b2987a91b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;