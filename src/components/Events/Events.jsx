import React from "react";
import "./Events.css";
import { assets } from "../../assets/assets";

const Events = () => {
  return (
    <div className="event-container">
      <h1>
        Events <p></p>
      </h1>
      <div className="events">
        <div className="event-left-side">
          <img src={assets.image8} alt="" className="event-img1" />
          <img src={assets.image5} alt="" className="event-img2" /> <br />
          <img src={assets.image14} alt="" className="event-img2" />
          <img src={assets.image7} alt="" className="event-img1" />
        </div>
        <div className="event-right-side">
          <p>
            <p>
              At the Society of Petroleum Engineers (SPE) Redeemer's University,
              we believe in the power of learning through experience. Our events
              are designed to provide students with valuable opportunities to
              engage with the petroleum industry, expand their knowledge, and
              build meaningful connections with professionals and peers.
            </p>
            <p>
              From workshops and seminars to site visits and networking
              sessions, our events cover a wide range of topics that cater to
              all levels of interest and expertise in petroleum engineering.
              Whether you're looking to enhance your skills, discover career
              opportunities, or simply stay updated on the latest trends in the
              energy sector, there's something for everyone!
            </p>
            <p>
              Don’t miss out on these enriching experiences! <br />
              Explore our upcoming events, register, and get ready to immerse
              yourself in a world of knowledge, innovation, and collaboration.
              Join us, attend our events, and take the first step towards
              building a successful career in petroleum engineering!
            </p>
            <p>
              Check out our Events page for more details and to stay updated on
              future activities!
            </p>
          </p>
          <button>View All Events</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
