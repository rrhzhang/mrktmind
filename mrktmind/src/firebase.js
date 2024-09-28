// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCULQf79hRnDvr1e9S8_XetwhGGfO8UZE4',
  authDomain: 'mrkt-1ddd0.firebaseapp.com',
  databaseURL: 'https://mrkt-1ddd0-default-rtdb.firebaseio.com',
  projectId: 'mrkt-1ddd0',
  storageBucket: 'mrkt-1ddd0.appspot.com',
  messagingSenderId: '703138497072',
  appId: '1:703138497072:web:f3741542aaf85a49f6e3f5',
  measurementId: 'G-4VN0T5PWNK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Set up Google Authentication provider
const googleProvider = new GoogleAuthProvider();

// Export Firebase services
export { app, auth, googleProvider };
