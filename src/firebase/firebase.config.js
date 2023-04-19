// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7YHO_AXNK9Bds5ELIdjn4VEqHMJz84LQ",
  authDomain: "ema-john-sample-with-firebase.firebaseapp.com",
  projectId: "ema-john-sample-with-firebase",
  storageBucket: "ema-john-sample-with-firebase.appspot.com",
  messagingSenderId: "545984375501",
  appId: "1:545984375501:web:5ede1d18f6e8cf08825784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;