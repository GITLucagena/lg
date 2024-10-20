
// src/firebase.js
import { initializeApp } from 'firebase/app'; // Import the function to initialize Firebase
import { getAuth } from 'firebase/auth'; // Import the function for Firebase Authentication

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdlykPpE5kqvwqyx_04TJvh7TotK9JxHY",
    authDomain: "makeatom-ee690.firebaseapp.com",
    projectId: "makeatom-ee690",
    storageBucket: "makeatom-ee690.appspot.com",
    messagingSenderId: "213714494458",
    appId: "1:213714494458:web:4872a5ef9ec9d227ddfa43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Initialize Firebase Auth

export { auth }; // Export the auth object





