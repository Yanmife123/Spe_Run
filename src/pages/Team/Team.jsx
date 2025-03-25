import React from "react";
import "./Team.css";
import { assets } from "../../assets/assets";
import { Footer, Navbar } from "../../components";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="team-banner">
        <div className="banner-content">
          <h2>PASSIONATE INNOVATORS</h2>
          <h2>DEDICATED TO DELIVERING</h2>
          <h2>EXCEPTIONAL RESULTS</h2>
        </div>
      </div>
      <div className="team-container">
        <h1>
          Our Team <p></p>
        </h1>
        <div className="team">
          <div className="team-card">
            <img src={assets.image16} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image3} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image19} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image18} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image21} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image25} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image20} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image26} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image27} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image28} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image29} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image30} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image31} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image32} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image33} alt="" />
          </div>
          <div className="team-card">
            <img src={assets.image34} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
