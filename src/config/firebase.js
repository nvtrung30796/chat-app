// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNJ9DRjahe2WYaT3d9CLOprva3Q9Lxsf4",
  authDomain: "chat-app-4c4e7.firebaseapp.com",
  projectId: "chat-app-4c4e7",
  storageBucket: "chat-app-4c4e7.appspot.com",
  messagingSenderId: "495290939584",
  appId: "1:495290939584:web:28c17c6c997330c4b3d525",
  measurementId: "G-57LMKZFW8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth()
const db = getFirestore(app);

export {analytics, provider, auth, db}