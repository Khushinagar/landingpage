// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXIhN1V6-9XSJAKLQ2_ZRqQf-cvrT_TAY",
  authDomain: "landingpage-c8834.firebaseapp.com",
  databaseURL: "https://landingpage-c8834-default-rtdb.firebaseio.com",
  projectId: "landingpage-c8834",
  storageBucket: "landingpage-c8834.appspot.com",
  messagingSenderId: "732137319140",
  appId: "1:732137319140:web:7e5bca565b3ed8ee7edaf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
export {app, auth};