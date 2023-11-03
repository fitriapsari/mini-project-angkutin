// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC11CvhKC7Y-xUNNHZpi5PLT9Ut3kGxhLQ",
  authDomain: "alta-16095.firebaseapp.com",
  projectId: "alta-16095",
  storageBucket: "alta-16095.appspot.com",
  messagingSenderId: "1091584763907",
  appId: "1:1091584763907:web:2f116b9abde51af9ea0636",
  measurementId: "G-EWWDT59120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;