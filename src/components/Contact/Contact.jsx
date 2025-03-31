import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>
        Contact Us <p></p>
      </h1>
      <div className="contact">
        <div className="contact-left-side">
          <img src={assets.image6} alt="" />
        </div>
        <div className="contact-right-side">
          <h4>
            We’d love to hear from you! Whether you have questions, suggestions,
            or want to learn more about the Society of Petroleum Engineers at
            Redeemer's University, we are here to help. <br />
            <br />
            Feel free to reach out to us for information on upcoming events,
            membership inquiries, or any general queries you may have. Our team
            is always ready to assist and ensure that you have a great
            experience with the society. Your journey in the petroleum industry
            starts here—let's make it a successful one together!
          </h4>
          <Link to="/contact">
            <button>Contact Form</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
