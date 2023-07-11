import React, { useState } from "react";
import logo from '../../../assets/Logo.png'
import { NavLink } from "react-router-dom";
import ReviewBox , {ReviewProps} from "./ReviewBox";
import googleLogo from '../../../assets/google1.png'
import linkedInLogo from '../../../assets/linkedin.png'
import fbLogo from '../../../assets/facebook1.png'

import './Login.css'


interface LoginProps {

}

const  reviews : ReviewProps[] =[
    {
        content:"I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.",
        name:"Ankit Sinha",
        college:"IIT Guwahati",
        id:"1",
        img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
    }
];

const review : ReviewProps = {
    content:"I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.",
    name:"Ankit Sinha",
    college:"IIT Guwahati",
    id:"1",
    img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
};



const Login: React.FC<LoginProps> = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);


    return (
        <div className="login-container">
            <div className="left-body">
                <img className="logo" src={logo} alt="Techbairn logo" />
                <h2 className="welcome-text">We are glad you are back !</h2>
                <p  className="info">Discover the India's best EdTech platform for upskilling yourself with community based learning.</p>
                <ReviewBox {...review}/>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

            </div>
            <div className="right-body">
                <h2 className="login-text">Log In</h2>
                <div className="sign-up-button-box">
                    <p className="dont-have-account">Don't have an account ?</p>
                    <NavLink className="sign-up-btn" to="/sign-up">Sign Up</NavLink>
                </div>
                <div className="social-logins">
                    <div className="social-login google">
                        <img src={googleLogo} alt ="google logo" className="google-logo"/>
                        <span className="company-name">Google</span>
                    </div>
                    <div className="social-login linked-in">
                    <img src={linkedInLogo} alt = "linkedIn logo" className="linkedin-logo"/>
                    <span className="company-name">Linkedin</span>
                    </div>
                    <div className="social-login facebook">
                    <img src={fbLogo} alt ="fb-logo" className="fb-logo"/>
                    <span className="company-name">Facebook</span>
                    </div>
                </div>
                <p className="or-text">Or</p>
                <p className="input-label email-text">Email</p>
                <input
                    className="input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="input-label">Password</p>
                <input
                    className="input"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="forgot-pass-box">
                   <div className="remember-me-box">
                   <label>
                        <input
                            className="check-box"
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </label>
                    <span className="remember-text">Remember me</span>
                   </div>
                    <NavLink className="forgot-password-btn" to="/reset-password">Forgot Password</NavLink>
                </div>
                <NavLink className="log-in-btn" to="/">Log In</NavLink>
            </div>

        </div>
    );

}

export default Login;