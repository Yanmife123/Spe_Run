import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About Us <p></p>
      </h1>
      <div className="about">
        <div className="about-left-side">
          <img src={assets.image3} alt="" className="about-img1" />
          <img src={assets.image2} alt="" className="about-img2" /> <br />
          <img src={assets.image1} alt="" className="about-img2" />
          <img src={assets.image4} alt="" className="about-img1" />
        </div>
        <div className="about-right-side">
          <p>
            The Society of Petroleum Engineers (SPE) at Redeemer's University is
            a student-driven organization committed to enhancing the academic
            and professional development of students with an interest in
            petroleum engineering and the energy industry. As a chapter of the
            global SPE network, we provide a platform for students to engage
            with industry professionals, participate in technical discussions,
            and develop skills that are essential for success in the petroleum
            sector.
          </p>
          <p>
            Our mission is to foster a collaborative environment where students
            can deepen their knowledge of petroleum engineering, connect with
            like-minded peers, and gain exposure to the latest advancements in
            the field. Through workshops, seminars, site visits, and hands-on
            projects, we aim to equip our members with practical experience and
            valuable insights that will help them thrive in the rapidly evolving
            energy landscape.
          </p>
          <p>
            Whether you’re looking to expand your knowledge, build a
            professional network, or contribute to sustainable energy solutions,
            the SPE at Redeemer's University offers a supportive community to
            help you achieve your goals and make a positive impact in the world
            of petroleum engineering.
          </p>
          <Link to="/about">
            <button>Read Full Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
