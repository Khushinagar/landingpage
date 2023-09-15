
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

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
firebase.initializeApp(firebaseConfig);
const projectAuth= firebase.auth()
export  {projectAuth};