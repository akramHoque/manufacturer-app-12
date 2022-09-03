// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0qTUjl2TNcC_ySSup_SBn-PEjw8PfVvc",
  authDomain: "manufacturer-app-12.firebaseapp.com",
  projectId: "manufacturer-app-12",
  storageBucket: "manufacturer-app-12.appspot.com",
  messagingSenderId: "161153156893",
  appId: "1:161153156893:web:686ac4beefff360a9203f4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;