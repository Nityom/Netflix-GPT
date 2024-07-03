// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsSclmr7Lp1Weld2l5QfsN59gzTqmVBX0",
  authDomain: "netflixgpt-3da09.firebaseapp.com",
  projectId: "netflixgpt-3da09",
  storageBucket: "netflixgpt-3da09.appspot.com",
  messagingSenderId: "429173735231",
  appId: "1:429173735231:web:06e1f2fe11c2babdfbdd8a",
  measurementId: "G-Z7HZFKZBDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();