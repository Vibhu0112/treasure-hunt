// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF-eugpNmp0Lms6kRlBKREfQoZ53ds5Ik",
  authDomain: "t-hunt-58a49.firebaseapp.com",
  databaseURL: "https://t-hunt-58a49-default-rtdb.firebaseio.com",
  projectId: "t-hunt-58a49",
  storageBucket: "t-hunt-58a49.appspot.com",
  messagingSenderId: "709335884041",
  appId: "1:709335884041:web:c57b4330a0b7d567af33d8"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);



export{app, db, storage};
