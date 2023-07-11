import React from "react";
import './HomeWork.css'
import bookLogo from '../../assets/homework--2--10@1x.png'

interface HomeWorkProp{
    color: string;
}

const HomeWork : React.FC<HomeWorkProp> = ({color}) =>{
    return (
        <div className="homework-box">
            <div className="circle" style={{backgroundColor: color}}>
                <img className="book-logo" src={bookLogo} alt ="book-logo" />
            </div>
            <p className="ellipse-description">
            Here we should mention 4 key differences that separates us from our competitors
            </p>
        </div>
    );
}

export default HomeWork;