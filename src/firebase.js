// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "firebas API key",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const database = getDatabase(app);

export { auth, database };
