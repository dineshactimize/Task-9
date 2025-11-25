// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByHiizE0U1dTRCd623Qrah1RatInwogrI",
  authDomain: "bookmyshow-clone-b97ec.firebaseapp.com",
  projectId: "bookmyshow-clone-b97ec",
  storageBucket: "bookmyshow-clone-b97ec.firebasestorage.app",
  messagingSenderId: "1076848237254",
  appId: "1:1076848237254:web:f0c02450033f56357d55c7",
  measurementId: "G-ENPKZ62WT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);