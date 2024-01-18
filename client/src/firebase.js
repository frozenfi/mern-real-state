// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-19f71.firebaseapp.com",
  projectId: "mern-real-estate-19f71",
  storageBucket: "mern-real-estate-19f71.appspot.com",
  messagingSenderId: "556075247174",
  appId: "1:556075247174:web:1cad1be642e16556894c47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
