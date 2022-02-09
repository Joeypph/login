import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB2uOtH_D_ROG0zHED9J2tTUH4W9vCkKKs",
    authDomain: "prueba-reac.firebaseapp.com",
    projectId: "prueba-reac",
    storageBucket: "prueba-reac.appspot.com",
    messagingSenderId: "771554400274",
    appId: "1:771554400274:web:87b2294b60e8553b28e0cb",
    measurementId: "G-8XVZ2BFGT0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth,createUserWithEmailAndPassword}