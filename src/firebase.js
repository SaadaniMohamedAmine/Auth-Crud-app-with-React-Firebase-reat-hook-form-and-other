import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh0ivwAlmAxPzQ-HenvfwmWmtk71_LE7U",
  authDomain: "auth-blog-project-ff53b.firebaseapp.com",
  projectId: "auth-blog-project-ff53b",
  storageBucket: "auth-blog-project-ff53b.appspot.com",
  messagingSenderId: "340896501431",
  appId: "1:340896501431:web:1d28bc69d8c6320ca78732",
  measurementId: "G-8YQB9LR532",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
