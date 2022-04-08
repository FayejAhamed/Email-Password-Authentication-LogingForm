// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKaBMNpA2ZfX_lLpeAGIrKcUsz3nkoW7U",
  authDomain: "email-password-auth-fe079.firebaseapp.com",
  projectId: "email-password-auth-fe079",
  storageBucket: "email-password-auth-fe079.appspot.com",
  messagingSenderId: "284478256921",
  appId: "1:284478256921:web:b65df2ee78abb33926f788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;