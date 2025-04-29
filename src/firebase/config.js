// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpwwkh-yVkX_ymqpAusJK4OFn7ZF9wwQ0",
  authDomain: "myapp2-50cf8.firebaseapp.com",
  projectId: "myapp2-50cf8",
  storageBucket: "myapp2-50cf8.firebasestorage.app",
  messagingSenderId: "1040672922134",
  appId: "1:1040672922134:web:237812ba9788c7eeeff337"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

