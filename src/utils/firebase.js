// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByPOcNt3UgKghMy5yQncYJXw3lqDauKxE",
  authDomain: "netflix-gpt-8f80e.firebaseapp.com",
  projectId: "netflix-gpt-8f80e",
  storageBucket: "netflix-gpt-8f80e.appspot.com",
  messagingSenderId: "1086871868780",
  appId: "1:1086871868780:web:528f9218a87a3edaf08f49",
  measurementId: "G-Z8VZJRETQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);