/* eslint-disable no-alert */
/* eslint-disable no-empty */
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

function Form() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(user.email, user.password)
      navigate('/board')
    } catch (err) {
      setError(err);
    }
  }
  const signInGoogle = async () => {
    try {
      const respuesta = await loginWithGoogle()
      if (respuesta.user.accessToken) {
        navigate('/board')
      } else {
        alert('Cant login')
      }
    } catch (err) {
      setError(err.message)
    }
  }
  console.log(error)
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
