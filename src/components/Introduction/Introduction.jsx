import React from "react";
import "./Introduction.css";
import { assets } from "../../assets/assets";

const Introduction = () => {
  return (
    <div className="intro-container">
      <h1>
        Introduction <span></span>
      </h1>
      <div className="intro">
        <div className="intro-left-side">
          <img src={assets.logo4} alt="" />
        </div>
        <div className="intro-right-side">
          <p>
            Welcome to the official website of the Society of Petroleum
            Engineers (SPE) at Redeemer's University! Our society is dedicated
            to fostering a vibrant community of students passionate about the
            petroleum industry and its innovative future. As a branch of the
            global SPE network, we aim to bridge the gap between academic
            learning and the dynamic energy sector, providing our members with
            unique opportunities for growth, professional development, and
            hands-on experience. Explore our site to learn about upcoming
            events, industry insights, and how you can get involved in shaping
            the future of petroleum engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
