/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  createContext, useContext,
  useEffect,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { auth } from '../assets/firebase';

export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is not auth provider')
  return context
}
export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  const popUp = signInWithPopup(auth, googleProvider)
  return popUp
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = (email, password, username) => {
    return createUserWithEmailAndPassword(auth, email, password, username)
  }
  const login = (email, password, displayName) => {
    return signInWithEmailAndPassword(auth, email, password, displayName)
  }
  const logout = () => signOut(auth);
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
  }, [])
  return (
    <authContext.Provider value={{
      signup, login, user, logout, loading, loginWithGoogle,
    }}
    >
      {children}
    </authContext.Provider>
  )
}
