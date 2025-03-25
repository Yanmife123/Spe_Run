import React from "react";
import "./Navbar.css";
import { IoMenu, IoMenuOutline } from "react-icons/io5";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={assets.logo3} alt="" />
        <input type="checkbox" id="check" />
        <label htmlFor="check" id="check-btn">
          <IoMenuOutline className="menuBtn" />
        </label>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/team"}>Team Members</Link>
          </li>
          <li>
            <Link to={"/events"}>Events</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <div className="nav-right-section">
            <Link to={"/register"}>
              <button className="button-1">Sign Up</button>
            </Link>
            <Link to={"/login"}>
              <button className="button-2">Login</button>
            </Link>
          </div>
        </ul>
        <div className="nav-right-section-b">
          <Link to={"/register"}>
            <button className="button-1">Sign Up</button>
          </Link>
          <Link to={"/login"}>
            <button className="button-2">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
