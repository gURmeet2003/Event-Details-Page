import React from "react";
import { NavLink } from "react-router-dom";
import girlPic from '../../../assets/Girl@2x.png'
import phoneCall from '../../../assets/phone-call.png'
import Talent from "../../icons/Talent";
import './Explore.css'
import KeyAttribute from "./KeyAttribute";


interface ExploreProps{

}


const Explore : React.FC<ExploreProps> = () =>{

    return(
        <div className="landing-page">
        <div className="explore container">
        <div className="left-box">
        <div className="dont-know-text-box">
        <p className="dont-know-text">Don't know</p>
        <p className="dont-know-text">where to start</p>
        <p className="dont-know-text">learning ?</p>
        </div>    
      
        <div className="about-techbairn">Here there will be some lines about techbairn. Content team please barge in and help. Thank you</div>
        {/* <div className="explore-btn-box"> */}
        <NavLink className="explore-btn" to="/explore">Explore</NavLink>
        {/* </div> */}
        </div>
        <div className="mid-box">
        <img className="clueless-girl-img" alt="clueless girl" src={girlPic} />
        {/* <Talent/> */}
        </div>
        <div className="right-box">
            <p className="guided-learning-text">Guided Learning</p>
            <p className="talk-to-consultant">Talk to our consultants and find your right path to start.</p>
        <div className="call-back-btn-box">
        <NavLink className="call-back-btn" to="/request-call">
        <img src={phoneCall} alt = "Phone image" className="phone-image"/>
         <span className="request-call-back-text">Request a call back</span>
         </NavLink>   
        </div>  
        </div>
    </div>
        </div>
    );

}

export default Explore;