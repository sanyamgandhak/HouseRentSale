// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApd9249ohPGNeaqbRCzH_Ig_pS17OnDFw",
  authDomain: "house-market-place-23c2a.firebaseapp.com",
  projectId: "house-market-place-23c2a",
  storageBucket: "house-market-place-23c2a.appspot.com",
  messagingSenderId: "1085579991429",
  appId: "1:1085579991429:web:8a6a072b190ce5ac0bccec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
