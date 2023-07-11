import React, { CSSProperties, useState } from "react";
import   './Header.css';
import logo from '../../assets/Logo.png'
import { NavLink } from "react-router-dom";



interface HeaderProps {

}



const Header: React.FC<HeaderProps> = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
      setMenuOpen(!menuOpen);
    }

    const logInClick = () =>{
      console.log("Logging In")
    }

    return (
      <header className="header">
        <img className="logo" src={logo} alt="Techbairn logo"/>
        <nav className="main-nav">
          <ul className="nav-list">
            <li><NavLink className="nav-list-item"  to="/programs">programs</NavLink></li>
            <li><NavLink className="nav-list-item" to="/campus-associate">campus associate</NavLink></li>
            <li><NavLink className="nav-list-item" to="/refer">refer & earn</NavLink></li>
            <li><NavLink className="nav-list-item" to="/more">more</NavLink></li>
          </ul>
        </nav>
        <div className="authenticate">
        <NavLink className="sign-up" to="/sign-up">Sign Up</NavLink>
        <NavLink className="log-in" to="/log-in">Log In</NavLink>
        </div>
    
      </header>
       
    );
};

export default Header;