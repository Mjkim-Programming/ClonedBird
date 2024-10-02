// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-BGShhQdEQ5jgcF_p3kgxRaPsKPQ1pTI",
  authDomain: "clonedbird-70a2f.firebaseapp.com",
  projectId: "clonedbird-70a2f",
  storageBucket: "clonedbird-70a2f.appspot.com",
  messagingSenderId: "1057890223465",
  appId: "1:1057890223465:web:71513ae0df58210ac4a9f8",
  measurementId: "G-ZD5FE8DJ89"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);