import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDkMCS2CpkQce406VioVbXNbPVDVJlhJqY",
    authDomain: "my-portfolio-7de16.firebaseapp.com",
    projectId: "my-portfolio-7de16",
    storageBucket: "my-portfolio-7de16.appspot.com",
    messagingSenderId: "274406867661",
    appId: "1:274406867661:web:8e2f64c7ca1c282d14df84",
    measurementId: "G-R6R2DQY09H"
  };
  export default firebaseConfig;

  // Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db= getFirestore(app);
