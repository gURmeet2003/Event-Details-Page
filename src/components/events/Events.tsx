import React from "react";
import "./Events.css";
import StudentSaying from "./studentssaying/StudentsSaying";
import Upcoming from "./upcoming/Upcoming";
import AboutEvents from "./about-events/AboutEvents";
import Speaker from "./about-speaker/AboutSpeaker";
import Faq from "./faq/Faq";
import Help from "./help/Help";
import Overview from "./overview/Overview";
import Instructor from "./instructor/Instructor";
import Header from "../header/Header";

const Events: React.FC = () => {
  return (
    <div className="events">
      <Header />
      <Upcoming star={4} rating={5000} students={10000} />
      {/* <AboutEvents /> */}
      <Overview />
      <StudentSaying />

      {/* <Speaker /> */}
      <Instructor />
      <Faq />
      <Help />
    </div>
  );
};
export default Events;
