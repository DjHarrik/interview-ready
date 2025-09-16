import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBwi9fxnyq3lB0oBLmBTsy6yIvhGM07Oag",
  authDomain: "interview-ready-441ce.firebaseapp.com",
  projectId: "interview-ready-441ce",
  storageBucket: "interview-ready-441ce.firebasestorage.app",
  messagingSenderId: "845367333652",
  appId: "1:845367333652:web:49cfac810caec72326a801",
  measurementId: "G-VYH389HWSY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
