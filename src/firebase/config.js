// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-I8NhkfqnfszrjPQzOmDFa4PnSGF0dwk",
  authDomain: "myapp-f81bb.firebaseapp.com",
  projectId: "myapp-f81bb",
  storageBucket: "myapp-f81bb.firebasestorage.app",
  messagingSenderId: "184530657930",
  appId: "1:184530657930:web:29fbbbc0708be4d7e3c373"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);