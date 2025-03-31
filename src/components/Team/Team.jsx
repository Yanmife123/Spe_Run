import React from "react";
import "./Team.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="team-container">
      <h1>
        Our Team <p></p>
      </h1>
      <div className="team">
        <div className="card">
          <img src={assets.image16} alt="" />
        </div>
        <div className="card">
          <img src={assets.image17} alt="" />
        </div>
        <div className="card">
          <img src={assets.image3} alt="" />
        </div>
        <div className="card">
          <img src={assets.image18} alt="" />
        </div>
        <div className="card">
          <img src={assets.image19} alt="" />
        </div>
        <div className="card">
          <img src={assets.image20} alt="" />
        </div>
        <div className="card">
          <img src={assets.image22} alt="" />
        </div>
        <div className="card">
          <img src={assets.image24} alt="" />
        </div>
      </div>
      <Link to="/team">
        <button>Meet Our Team</button>
      </Link>
    </div>
  );
};

export default Team;
