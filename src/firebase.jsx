// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'stevens-todo-app.firebaseapp.com',
  projectId: 'stevens-todo-app',
  storageBucket: 'stevens-todo-app.appspot.com',
  messagingSenderId: '159657011001',
  appId: '1:159657011001:web:01bd42723b012b0f4b2ae8',
  measurementId: 'G-DEN8CYNXPZ',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
