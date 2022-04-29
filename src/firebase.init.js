// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1Tfj6EGyeIyF-Mjtn3zvzKKCpeZ_8GU",
  authDomain: "bookathon-warehouse-client.firebaseapp.com",
  projectId: "bookathon-warehouse-client",
  storageBucket: "bookathon-warehouse-client.appspot.com",
  messagingSenderId: "938615776547",
  appId: "1:938615776547:web:2c667e8f99454363291896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;