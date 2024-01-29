// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-171e7.firebaseapp.com",
  projectId: "mern-blog-171e7",
  storageBucket: "mern-blog-171e7.appspot.com",
  messagingSenderId: "268995742719",
  appId: "1:268995742719:web:67f561c92401202f89b5ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);