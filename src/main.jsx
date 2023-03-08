/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// eslint-disable-next-line import/no-cycle
import './App.css';
import { EmojiContextProvider } from './context/emojiContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmojiContextProvider>
      <App />
    </EmojiContextProvider>
  </React.StrictMode>,
);
