import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCgZgzlR1Y1iQmTSkZ4RwgBoHxnfVsz4g0",
    authDomain: "do-an-film.firebaseapp.com",
    projectId: "do-an-film",
    storageBucket: "do-an-film.appspot.com",
    messagingSenderId: "484402304579",
    appId: "1:484402304579:web:c057a2a867155af02ce6f6"
  };
  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);