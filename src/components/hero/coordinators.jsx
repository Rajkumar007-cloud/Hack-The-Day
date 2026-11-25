import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/giridharan.webp"
              alt="Giridharan - Assistant professor"
            />
            <h1 className="convener-name">Mr. Aloke Roy</h1>
            <h1 className="convener-position">
              Assistant Professor, H.O.D, Dean Academics - CSE 
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/nandhashree.webp"
              alt="Nandhashree - Assistant professor"
            />
            <h1 className="convener-name"> Mr. Amit Goswami</h1>
            <h1 className="convener-position">
              Assitant Professor - Artifical Neural Network (NAA) 
              </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
