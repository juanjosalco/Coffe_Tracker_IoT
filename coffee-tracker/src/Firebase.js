// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwW0QqNpjvaxDyxoyflvEr3LOI2HijTgo",
  authDomain: "tec-week-iot.firebaseapp.com",
  databaseURL: "https://tec-week-iot-default-rtdb.firebaseio.com",
  projectId: "tec-week-iot",
  storageBucket: "tec-week-iot.appspot.com",
  messagingSenderId: "382023793289",
  appId: "1:382023793289:web:0aa51482d20468c767a458",
  measurementId: "G-7C2K0B0XG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

