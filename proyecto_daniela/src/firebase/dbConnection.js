// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNW6AJnNURj71KBL47zIZe9spsiZsxu2Y",
  authDomain: "proyecto-tiendadaniela.firebaseapp.com",
  projectId: "proyecto-tiendadaniela",
  storageBucket: "proyecto-tiendadaniela.appspot.com",
  messagingSenderId: "611939775398",
  appId: "1:611939775398:web:6130387b947c27b8775567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);