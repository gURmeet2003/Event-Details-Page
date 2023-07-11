import React from "react";
import HomeWork from "../homwork/HomeWork";
import './HowWeAreDifferent.css'




const HowWeAreDifferent : React.FC = () =>{

    return(
        <div className="how-we-are-different-box container">
            <p className="heading-text">How we are different</p>
            <div className="ellipse-box">
                <HomeWork color="#6D87F5"/>
                <HomeWork color="#FFEDB6"/>
                <HomeWork color="#B2E2C6"/>
                <HomeWork color="#FECBC4"/>
            </div>
           
        </div>
    );

}

export default HowWeAreDifferent;