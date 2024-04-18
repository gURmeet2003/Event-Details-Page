import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/main/login/Login";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Main/> */}
      <Events />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
