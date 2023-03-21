import React, { CSSProperties } from "react";
import styles from './Navbar.module.css';
import logo from '../assets/Logo.png';
import Button from "./Button";



interface NavBarProps {

}

const signUpButtonStyle: CSSProperties = {

    backgroundColor: "#6D87F5",
    height: "67px",
    width: "188px",
    borderRadius: "20px",
};


const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className={styles.nav_bar}>
            <div className={styles.nav_bar_body}>
                <div className={styles.nav_bar_left}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.nav_bar_center}>
                    <ul className={styles.navBarList} >
                        <li><p>programs</p></li>
                        <li><p>campus associate</p></li>
                        <li><p>refer & earn</p></li>
                        <li><p>more</p></li>
                    </ul>
                </div>
                <div className={styles.nav_bar_right}>
                    <div className="sign-up">

                    </div>
                    <div className="log-in">
                        <Button text="Log In" buttonTextColor="#FFFFFF" style={signUpButtonStyle} onClick={() => console.log("button Clicked")} />
                    </div>
                </div>
            </div>

        </nav>

    );
};

export default NavBar;