// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoV_ov0yB4ro74ba9eHIu3UQuZtJKY0UU",
  authDomain: "reactapp-b5c91.firebaseapp.com",
  projectId: "reactapp-b5c91",
  storageBucket: "reactapp-b5c91.firebasestorage.app",
  messagingSenderId: "779711909833",
  appId: "1:779711909833:web:cd4ef7ed63ce884edba218",
  measurementId: "G-S28TQNBBCD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

