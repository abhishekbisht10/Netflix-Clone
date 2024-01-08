// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { FIREBASE_KEY } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "authenticate-9e643.firebaseapp.com",
  projectId: "authenticate-9e643",
  storageBucket: "authenticate-9e643.appspot.com",
  messagingSenderId: "495450210391",
  appId: "1:495450210391:web:74be36ca5fc2ad1e7ce312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);