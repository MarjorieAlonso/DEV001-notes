/* eslint-disable import/no-unresolved */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4v9zBQ8xSfxgCdtc1OLoCBPz6pu0Ri0A',
  authDomain: 'lab-notes-6dd2a.firebaseapp.com',
  projectId: 'lab-notes-6dd2a',
  storageBucket: 'lab-notes-6dd2a.appspot.com',
  messagingSenderId: '844675269448',
  appId: '1:844675269448:web:1743b97b85164f25c6e97d',
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const googlePopup = () => signInWithPoup(auth, provider)
export default app;
