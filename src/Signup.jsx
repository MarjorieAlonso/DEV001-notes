/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from 'react';
// import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-cycle
// import App from './App';
import './index.css';

const SignUp = () => {
  return (
    <form>
      <h1>MOOD TRACKER</h1>
      <input type="text" id="username" placeholder="write your username" />
      <br />
      <input type="text" id="mail" placeholder="email" />
      <br />
      <input type="text" id="contraseña" placeholder="password" />
      <br />
      <button id="register">Start my mood tracker</button>
    </form>
  )
}
export default SignUp;
