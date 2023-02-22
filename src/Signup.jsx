/* eslint-disable no-shadow */
/* eslint-disable import/no-duplicates */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';


const SignUp = () => {

  const [user, setUser] = useState({
    mail: '',
    contraseña: '',
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [errorMsg, setError] = useState("");

  useEffect(()=>{
    if(errorMsg !== '') {
      alert(errorMsg)
    }
  },[errorMsg] )

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await signup(user.mail, user.contraseña, user.username)
      // console.log(response);
      navigate('/board')
    } catch (error) {
      // console.log(error)
      if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters')
      
      } if (error.code === 'auth/invalid-email') {
        setError('Invalid email')
       
      } if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use')
      
      }
      
    }
   
  }
  return (
    <div>
    <div>
      <form onSubmit={handleSubmit}>
        <h1>MOOD TRACKER</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="write your username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="mail"
          id="mail"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="contraseña"
          id="contraseña"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit" id="register">Start my mood tracker</button>
      </form>
    </div>
    </div>
  )
}
export default SignUp;
