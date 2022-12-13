import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDaf5DuviSFnHs0Q1aLYXazA5LC9TwPzY4",
  authDomain: "chillflix-doan.firebaseapp.com",
  projectId: "chillflix-doan",
  storageBucket: "chillflix-doan.appspot.com",
  messagingSenderId: "941254367396",
  appId: "1:941254367396:web:3a60378db3e16902782e31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export const dbDoc = getFirestore(firebaseApp)
export { auth };
export default db;