/* eslint-disable import/no-unresolved */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPoup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLiRrU5C1-C0ApMiUBc9l_OCyecuQsOyM',
  authDomain: 'mood-tracker-91f37.firebaseapp.com',
  projectId: 'mood-tracker-91f37',
  storageBucket: 'mood-tracker-91f37.appspot.com',
  messagingSenderId: '53322166801',
  appId: '1:53322166801:web:740378177993c469a037b0',
  measurementId: 'G-38MRZV8ZSM',
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const googlePopup = () => signInWithPoup(auth, provider)
export default app;
