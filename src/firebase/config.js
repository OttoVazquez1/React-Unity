// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHo8BkJXCCcCnGcXL7j6effBx4IEkeJEU",
  authDomain: "unity-coderhouse.firebaseapp.com",
  projectId: "unity-coderhouse",
  storageBucket: "unity-coderhouse.appspot.com",
  messagingSenderId: "132318833017",
  appId: "1:132318833017:web:b9d70ce2c95ddd3fbca7a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}