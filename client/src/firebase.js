// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rsvp-app-b0bf4.firebaseapp.com",
  projectId: "rsvp-app-b0bf4",
  storageBucket: "rsvp-app-b0bf4.appspot.com",
  messagingSenderId: "364705019826",
  appId: "1:364705019826:web:1ae316849244fd893e96ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);