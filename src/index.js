// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJzsXgCBhbYUPkiXmQRO8RUCWo5l3jvk",
  authDomain: "labactivity1-63bf5.firebaseapp.com",
  projectId: "labactivity1-63bf5",
  storageBucket: "labactivity1-63bf5.appspot.com",
  messagingSenderId: "852577713271",
  appId: "1:852577713271:web:f1bf5b4ece48f0ea131a72",
  measurementId: "G-48HKQ7WRK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)