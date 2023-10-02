// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVC9DdSFj9ODv6gGfDbH3jpvbZL1PeocU",
  authDomain: "amzn-2-nextjs-c69b7.firebaseapp.com",
  projectId: "amzn-2-nextjs-c69b7",
  storageBucket: "amzn-2-nextjs-c69b7.appspot.com",
  messagingSenderId: "364215510301",
  appId: "1:364215510301:web:3b35d403cab71c7e8badf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);