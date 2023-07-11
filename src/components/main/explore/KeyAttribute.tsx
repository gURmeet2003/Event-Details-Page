import React from "react";
import './KeyAttribute.css'




const KeyAttribute : React.FC = () =>{

    return(
        <div className="key-attribute-box container">
            <p className="key-attribute-heading">Our Key attributes</p>
            <p className="description">Here we will add our stats and other data so I don't know what else to add but a 2-3 liner will be good here. Here we will add our stats and other data so I don't know what else to add but a 2-3 liner will be good here. Here we will add our stats and other data so I don't know what else to add but a 2-3 liner will be good here.</p>
            <div className="figure-numbers-box">
                <div className="figure-number">
                    <p className="number">2000+</p>
                    <p className="learner">Learners</p>
                </div>
                <div className="figure-number">
                    <p className="number">2000+</p>
                    <p className="learner">Learners</p>
                </div>
                <div className="figure-number">
                    <p className="number">2000+</p>
                    <p className="learner">Learners</p>
                </div>
                <div className="figure-number">
                    <p className="number">2000+</p>
                    <p className="learner">Learners</p>
                </div>
            </div>
         
        </div>
    );

}

export default KeyAttribute;