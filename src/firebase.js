import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "magazine-website-62cc0.firebaseapp.com",
  projectId: "magazine-website-62cc0",
  storageBucket: "magazine-website-62cc0.appspot.com",
  messagingSenderId: "160286987538",
  appId: "1:160286987538:web:6edc11d199977477060fcb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
