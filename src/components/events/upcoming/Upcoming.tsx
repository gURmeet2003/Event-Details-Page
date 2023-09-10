import React from "react";
import './Upcoming.css';
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import speaker from '../../../assets/Group 380.png'

interface props {
    star: number,
    rating: number;
    students: number

}

const Upcoming: React.FC<props> = (props) => {
    const arr = new Array<number>(5);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = i;
    }

    return (
        <div className="upcoming">
            <div className="upcoming-content">
            <div className="upcoming-info">
                <div className="upcoming-links">
                    <a href="http://"><p>Events</p></a>
                    <AiOutlineRight size={15} color="white" />
                    <a href="http://"><p>Upcoming Event 1</p></a>
                </div>
                <div className="upcoming-paragraphs">
                    <p className="upcoming-paragraphs-para1">Building & Scaling a D2C Brand in India</p>
                    {/* <p className="upcoming-paragraphs-para2">A Full Stack Web Development Program</p> */}
                    <p className="upcoming-paragraphs-para3">Learn the practical approach of building a D2C Brand in India from <br />the man himself.</p>
                </div>
                <div className="upcoming-ratings">
                    <div className="upcoming-stars">
                        <p>{props.star}</p>
                        <p>{
                            arr.map((value, key) => (
                                key < props.star ?
                                    <AiFillStar color="white" size={20} /> :
                                    <AiOutlineStar color="white" size={20} />
                            ))
                        }</p>
                        <p>({props.rating} Ratings)</p>
                        <p>{props.students} Students</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <p>Date : 1st February, 2024 </p>
                    <p>Time : 7:00 pm onwards (IST) </p>
                    <p>Mode : Online</p>
                </div>
                <div className="upcoming-buttons">
                    <button className="upcoming-buttons-enroll"><p>Enroll Now for ₹ 3,999</p><p
                        className="upcoming-buttons-strike"> ₹ 5000</p></button>
                </div>
            </div>
            <div className="upcoming-img">
                <img src={speaker} alt="" />
            </div>
            </div>
        </div>
    );
}
export default Upcoming;