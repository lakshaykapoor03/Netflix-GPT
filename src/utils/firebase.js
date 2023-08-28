// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuB_d_sruYgr9Hw7JHcv4_8D0mfib53Go",
  authDomain: "netflixgpt-4a1ca.firebaseapp.com",
  projectId: "netflixgpt-4a1ca",
  storageBucket: "netflixgpt-4a1ca.appspot.com",
  messagingSenderId: "328235793567",
  appId: "1:328235793567:web:31e453ce4e0e26bf06f6aa",
  measurementId: "G-BN7LF6RVFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();