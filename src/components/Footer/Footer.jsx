import "./Footer.css";

import { Link } from "react-router-dom";

import { LinkedIn, Instagram, Facebook, X, Threads } from "../../assets";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <p>Our social media plaforms:</p>
      <ul className="socials">
        <li>
          <Link to="">
            <img src={Instagram} alt="" />
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link to="">
            <img src={Facebook} alt="" />
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link to="">
            <img src={X} alt="" />
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link to="">
            <img src={Threads} alt="" />
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link to="">
            <img src={LinkedIn} alt="" />
          </Link>
        </li>
      </ul>
      <p>
        &copy; Copyright {new Date().getFullYear()}, <br /> Society of Petroleum
        Engineers RUN Chapter. All rights reserved.
      </p>
    </footer>
  );
}
