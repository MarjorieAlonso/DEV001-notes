/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../assets/firebase';

export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is not auth provider')
  return context
}

export function AuthProvider({ children }) {
  const signup = (email, password, username) => {
    return createUserWithEmailAndPassword(auth, email, password, username)
  }
  const login = (email, password)=>{
    const userCredentials=  signInWithEmailAndPassword(auth, email, password)
   
  console.log(userCredentials)
  }
  return (
    <authContext.Provider value={{ signup, login }}>{children}</authContext.Provider>
  )
}
