import React from "react";
import "./Events.css";
import { assets } from "../../assets/assets";
import { Footer, Navbar } from "../../components";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="event-banner">
        <div className="banner-content">
          <h2>2025</h2>
          <h2>ANNUAL TECHNICAL</h2>
          <h2>CONFERENCE & EXHIBITION</h2>
          <div>
            <p>August 4th - August 7th, 2025</p>
            <button>Register Now</button>
          </div>
        </div>
      </div>
      <div className="events-container">
        <h1>
          Our Events <p></p>
        </h1>
        <div className="events-container-events">
          <div className="event-card">
            <img src={assets.image7} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image8} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image9} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image10} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image11} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image12} alt="" />
            <h3>Event Title</h3>
            <h4>Event Location</h4>
            <div className="text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fuga mollitia dignissimos nisi molestias! Harum
                consectetur blanditiis numquam sapiente eveniet?
              </h5>
            </div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
