/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import App from './App';
// eslint-disable-next-line import/no-cycle

import './index.css';
import { useAuth } from './context/authContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
const Form = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login , loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await login(user.email, user.password)
      navigate('/board')
    } catch (error) {
      
    }
  }
  const signInGoogle = async ()=>{
    await loginWithGoogle()
    navigate('/board') 

  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>MOOD TRACKER</h1>
      <input name="email" type="text" id="email" placeholder="email" onChange={handleChange} />
      <br />
      <input name="password" type="password" id="password" placeholder="password" onChange={handleChange} />
      <p>Use this app to track your feelings and improve your state of mind</p>
      <button type="submit" id="update">Update my mood</button>
      <br />
      <button onClick={signInGoogle} type="button" id="botonGoogle">Login with Google</button>
      <br />
      <Link to="/signup" className="signupLink">Sign me up!</Link>
    </form>
  );
}

export default Form;
