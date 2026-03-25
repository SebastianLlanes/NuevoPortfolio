import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRQyki8wSFEzkZFwyvdGs8KTVL1ITfr-g",
  authDomain: "portfolio-llanes.firebaseapp.com",
  projectId: "portfolio-llanes",
  storageBucket: "portfolio-llanes.firebasestorage.app",
  messagingSenderId: "244066274615",
  appId: "1:244066274615:web:acdb94f52e2651d354deb2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);