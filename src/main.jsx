import React from 'react';
import ReactDOM from 'react-dom/client';
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
      <input type="text" id="email" placeholder="email"></input>
      <br></br>
      <input type="text" id='password' placeholder='password'></input>
      <p>Use this app to track your feelings and improve your state of mind</p>
      <button id="update">Update my mood</button>
      <br></br>
      <button type="submit" id="botonGoogle">Login with Google</button>
    </form>
  );
};

export default Form;
