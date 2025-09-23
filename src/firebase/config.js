// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_SECRET_KEY,
  authDomain: "myapp-44b7b.firebaseapp.com",
  projectId: "myapp-44b7b",
  storageBucket: "myapp-44b7b.appspot.com",
  messagingSenderId: "178928847908",
  appId: "1:178928847908:web:7b500f099a3580483c9cb1"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

