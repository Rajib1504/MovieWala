// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA90QFrBHOllrWlaTWsfPcrIRTnH7i_NOE",
  authDomain: "mobiwala.firebaseapp.com",
  projectId: "mobiwala",
  storageBucket: "mobiwala.firebasestorage.app",
  messagingSenderId: "97305944561",
  appId: "1:97305944561:web:f991a96dc1296e77116450",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
