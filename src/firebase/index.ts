// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlR2vxBVXEJMcNgzNSw23FrHyQynRRiK0",
  authDomain: "livesports01.firebaseapp.com",
  projectId: "livesports01",
  storageBucket: "livesports01.firebasestorage.app",
  messagingSenderId: "80816211729",
  appId: "1:80816211729:web:aa0957b0a885648870aeb0",
  measurementId: "G-HEYPSTHKH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);\

export { app };
