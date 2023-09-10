import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Login from './components/main/login/Login';
import Events from './components/events/Events';




function App() {

  
  return (
    <BrowserRouter>
    {/* <Header/>
     <Main/> */}
     <Events/>
    </BrowserRouter>
  );
}

export default App;
