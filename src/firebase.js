// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBxaTf1p9b-uuzGDufjJ2enKci53sxMDI",
  authDomain: "phototagging-2da17.firebaseapp.com",
  projectId: "phototagging-2da17",
  storageBucket: "phototagging-2da17.appspot.com",
  messagingSenderId: "471526969579",
  appId: "1:471526969579:web:6b3cdbd694e50b99f5eeae",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { app, database };

// Initialize Firebase
