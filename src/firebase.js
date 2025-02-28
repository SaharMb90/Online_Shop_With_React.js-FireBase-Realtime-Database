// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBiVwDzwpDk4wCv8AAn44lO2_d-KfQiTmQy",
    
    databaseURL: "https://solo-project-dcf02-default-rtdb.firebaseio.com",
    projectId: "solo-project-dcf028",
    authDomain: "solo-project-dcf028.firebaseapp.com",
    storageBucket: "solo-project-dcf028.appspot.com",
    messagingSenderId: "864913240298",
    appId: "1:864913240298:web:a7ee1051adafb1737ea793",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const database = getDatabase(app);

export { auth, database };
