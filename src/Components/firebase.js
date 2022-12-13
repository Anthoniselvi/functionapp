import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUta7xbRK0Wqn6BUV297R2VjQSspk-lw4",
  authDomain: "santa-81bc5.firebaseapp.com",
  projectId: "santa-81bc5",
  storageBucket: "santa-81bc5.appspot.com",
  messagingSenderId: "63979182028",
  appId: "1:63979182028:web:01144f1e932dd0370c2f69",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
