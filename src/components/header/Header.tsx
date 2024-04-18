import "./Header.css";
import logo from "../../assets/Logo.png";
import hamburger from "../../assets/hamburger.png";
import { NavLink } from "react-router-dom";

import { useRef, useState, useEffect } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const transRef = useRef<HTMLDivElement>(null);
  const closeNavRef = useRef<HTMLDivElement>(null);
  const mainNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navOpen) {
      transRef.current?.classList.add("open");
      closeNavRef.current?.classList.add("open");
      mainNav.current?.classList.add("open");
    } else {
      transRef.current?.classList.remove("open");
      closeNavRef.current?.classList.remove("open");
      mainNav.current?.classList.remove("open");
    }
  }, [navOpen]);
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Techbairn logo" />
      <div className="open-nav" onClick={() => setNavOpen(true)}>
        <img src={hamburger} alt="hamburger" />
      </div>
      <div className="trans-box" ref={transRef}></div>
      <nav className="main-nav open" ref={mainNav}>
        <div
          className="close-nav open"
          onClick={() => setNavOpen(false)}
          ref={closeNavRef}
        >
          &times;
        </div>
        <ul className="nav-list">
          <li>
            <NavLink className="nav-list-item" to="/programs">
              programs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/campus-associate">
              campus associate
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/refer">
              refer & earn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/more">
              more <span aria-hidden="true">↓</span>
            </NavLink>
          </li>
        </ul>
        <div className="authenticate">
          <NavLink className="sign-up" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink className="log-in" to="/log-in">
            Log In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
