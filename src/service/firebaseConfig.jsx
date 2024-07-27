// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA54-04QkySYQh53zbR7c7tPmy2v7Xv3pY",
  authDomain: "ai-travel-planner-2ed5c.firebaseapp.com",
  projectId: "ai-travel-planner-2ed5c",
  storageBucket: "ai-travel-planner-2ed5c.appspot.com",
  messagingSenderId: "848043902908",
  appId: "1:848043902908:web:9d3c2f8921d2b129d8cdb9",
  measurementId: "G-V5W5Q9459J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);