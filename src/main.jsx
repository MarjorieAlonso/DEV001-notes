/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    mail: '',
    contraseña: '',
  });
  const {login}=useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await login(user.mail, user.contraseña)
      navigate('/board')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>MOOD TRACKER</h1>
      <input type="text" id="email" placeholder="email"  onChange={handleChange} />
      <br />
      <input type="password" id="password" placeholder="password"   onChange={handleChange}/>
      <p>Use this app to track your feelings and improve your state of mind</p>
      <button type="submit" id="update">Update my mood</button>
      <br />
      <button type="submit" id="botonGoogle">Login with Google</button>
      <br />
      <Link to="/signup" className="signupLink">Sign me up!</Link>
    </form>
  );
}

export default Form;
