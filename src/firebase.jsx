// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-138ba.firebaseapp.com",
  projectId: "store-tutorial-138ba",
  storageBucket: "store-tutorial-138ba.appspot.com",
  messagingSenderId: "67926225197",
  appId: "1:67926225197:web:6979ce478588db2d0a23a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);