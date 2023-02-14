/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
/* import { useState } from 'react' */
import React from 'react';
import './App.css';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom';
import Form from './main.jsx';
import SignUp from './Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
