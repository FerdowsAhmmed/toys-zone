// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8ZWbX9UsVZmsuxq9SZbCgSMQkWUL4hE",
  authDomain: "toys-zone-56369.firebaseapp.com",
  projectId: "toys-zone-56369",
  storageBucket: "toys-zone-56369.appspot.com",
  messagingSenderId: "150763059972",
  appId: "1:150763059972:web:5f985bc50ec97b89e5ae51"
};
  console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;