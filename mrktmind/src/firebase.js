// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULQf79hRnDvr1e9S8_XetwhGGfO8UZE4",
  authDomain: "mrkt-1ddd0.firebaseapp.com",
  databaseURL: "https://mrkt-1ddd0-default-rtdb.firebaseio.com",
  projectId: "mrkt-1ddd0",
  storageBucket: "mrkt-1ddd0.appspot.com",
  messagingSenderId: "703138497072",
  appId: "1:703138497072:web:f3741542aaf85a49f6e3f5",
  measurementId: "G-4VN0T5PWNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export { app, auth };