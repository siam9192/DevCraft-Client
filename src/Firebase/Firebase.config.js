// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAReceeZye4L04hOlY_Gy_FYJ6kd6rwabI",
  authDomain: "empolyee-managemant.firebaseapp.com",
  projectId: "empolyee-managemant",
  storageBucket: "empolyee-managemant.appspot.com",
  messagingSenderId: "463278169547",
  appId: "1:463278169547:web:843fef98013b04451b2a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;