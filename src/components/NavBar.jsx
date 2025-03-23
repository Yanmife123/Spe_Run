import "./NavBar.css";
import SpeLogo from "../assets/spe-logo.svg";
import RunLogo from "../assets/run-logo.svg";
import NavArrow from "../assets/menu-arrow-2.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [sideNavBar, setSideNavBar] = useState(false);
  const sideNavHandler = () => {
    setSideNavBar(!sideNavBar);
  };
  return (
    <nav className="nav-container">
      <div className="nav-bar">
        <div className="nav-wrapper">
          <div className="logo-container">
            <img src={SpeLogo} alt="" />
            <img src={RunLogo} alt="" />
          </div>
          <p>
            Society of Petroleum Engineers <br /> Redeemer’s University Chapter
          </p>
        </div>
        <button onClick={() => sideNavHandler()} className="nav-bar-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      {sideNavBar && (
        <div
          className="side-nav"
          style={sideNavBar ? { width: "200px" } : { width: 0 }}
        >
          <ul>
            <li>
              <div className="side-nav-btns">
                <button
                  className="close-side-nav"
                  onClick={() => setSideNavBar(false)}
                >
                  &times;
                </button>
                <button className="nav-bar-menu">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </button>
              </div>
            </li>
            <li>
              <Link to="">
                <span className="side-nav-link">Home</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="side-nav-link">About Us</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="">
                <span className="side-nav-link">Events</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="">
                <span className="side-nav-link">Team</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="side-nav-link">Contact Us</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="side-nav-link">Login</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span className="side-nav-link">Register</span>
                <img src={NavArrow} alt="" className="side-nav-arrow" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
