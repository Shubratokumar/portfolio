// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtLZkO0SW8Y1F9K-JKfONwmbDRoatC1S0",
  authDomain: "shubrato-portfolio.firebaseapp.com",
  projectId: "shubrato-portfolio",
  storageBucket: "shubrato-portfolio.appspot.com",
  messagingSenderId: "981426901637",
  appId: "1:981426901637:web:8c5c1eb892894fad440fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;