import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Explore from "../main/explore/Explore";
import KeyAttribute from "../main/explore/KeyAttribute";
import HowWeAreDifferent from "../main/HowWeAreDifferent";
import "./LandingPage.css";
const LandingPage:  React.FC = () => {


  return (
    <div className="landing-page">
      <Explore/>
      <KeyAttribute/>
      <HowWeAreDifferent/>
  
    </div>
  );
};

export default LandingPage;
