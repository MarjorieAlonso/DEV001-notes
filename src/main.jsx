/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
const Form = () => {
  return (
    <form>
      <h1>MOOD TRACKER</h1>
      <input type="text" id="email" placeholder="email" />
      <br />
      <input type="password" id="password" placeholder="password" />
      <p>Use this app to track your feelings and improve your state of mind</p>
      <button id="update">Update my mood</button>
      <br />
      <button type="submit" id="botonGoogle">Login with Google</button>
      <br />
      <Link to="/signup" className="signupLink">Sign me up!</Link>
    </form>
  );
}

export default Form;
