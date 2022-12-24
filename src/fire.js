// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfZWtKFRDL_O4BOs2Q-L_ilVtwr75zug0",
  authDomain: "fir-music-project-86281.firebaseapp.com",
  projectId: "fir-music-project-86281",
  storageBucket: "fir-music-project-86281.appspot.com",
  messagingSenderId: "182929033573",
  appId: "1:182929033573:web:58c70e838e85977de7b98c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = firebase.auth(app);

export default app;
