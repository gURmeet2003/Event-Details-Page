import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Login from './components/main/login/Login';




function App() {

  
  return (
    <BrowserRouter>
    <Header/>
     <Main/>
    </BrowserRouter>
  );
}

export default App;
