// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2vnXHzVRyL_KtzKdVP_3Lt-5HaN_epn8",
  authDomain: "toolbox-3c67a.firebaseapp.com",
  projectId: "toolbox-3c67a",
  storageBucket: "toolbox-3c67a.appspot.com",
  messagingSenderId: "1095140430819",
  appId: "1:1095140430819:web:ccf08c14725aeec3c2c6d6",
  measurementId: "G-D052BNCJJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);