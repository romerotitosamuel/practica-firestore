// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhadUxQ8m2Oy606FvF6k5kSP-gNY-RNPc",
  authDomain: "practica-firestore-9dbf5.firebaseapp.com",
  projectId: "practica-firestore-9dbf5",
  storageBucket: "practica-firestore-9dbf5.appspot.com",
  messagingSenderId: "946593673476",
  appId: "1:946593673476:web:90541347abb215294d2051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
console.log('esta funcionando db')



export default db