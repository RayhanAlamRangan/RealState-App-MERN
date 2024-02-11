


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-stack-27053.firebaseapp.com",
  projectId: "mern-stack-27053",
  storageBucket: "mern-stack-27053.appspot.com",
  messagingSenderId: "815082342629",
  appId: "1:815082342629:web:25fba0012c8a1b7d762c0c"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);