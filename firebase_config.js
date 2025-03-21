
import { initializeApp } from "firebase/app";
import { getFirestore, collection,addDoc,getDoc,getDocs,onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLM0lbWr8GPrGKFDugcUhoS-4BXkj1pEs",
  authDomain: "reactqna.firebaseapp.com",
  projectId: "reactqna",
  storageBucket: "reactqna.firebasestorage.app",
  messagingSenderId: "191381087163",
  appId: "1:191381087163:web:38b202bcfcbd3021189a9e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db,collection,addDoc,getDoc,getDocs,onSnapshot };