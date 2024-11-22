import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9CvO65aZQULgL-OEan6sbIuwBP33R4dw",
  authDomain: "ghosthunter-3541e.firebaseapp.com",
  projectId: "ghosthunter-3541e",
  storageBucket: "ghosthunter-3541e.firebasestorage.app",
  messagingSenderId: "819267394906",
  appId: "1:819267394906:web:89b48634b6c61a3eb6e763",
  measurementId: "G-LF8HCVVE5V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();