// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV1BpcafJ03xG-YNrun-mlFVuCe8KOBlc",
  authDomain: "orebi-c6a00.firebaseapp.com",
  projectId: "orebi-c6a00",
  storageBucket: "orebi-c6a00.appspot.com",
  messagingSenderId: "738387855240",
  appId: "1:738387855240:web:554b293e3183e198435c3d",
  measurementId: "G-CG6END1K2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;