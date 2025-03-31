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
            <h3> SPE TechX: Innovations in Drilling & Exploration</h3>
            <h4>University Auditorium / Conference Hall</h4>
            <div className="text">
              <h5>
                A technology-focused event where industry experts and
                researchers discuss the latest advancements in drilling, well
                completion, and reservoir engineering. Featuring keynote
                speeches, panel discussions, and hands-on workshops with
                real-world case studies.
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image8} alt="" />
            <h3>Energy Transition Summit: The Future of Oil & Gas</h3>
            <h4>Hotel Conference Center / Virtual Event</h4>
            <div className="text">
              <h5>
                A conference exploring the role of petroleum engineers in the
                energy transition. Discussions will include carbon capture,
                hydrogen energy, and sustainable drilling technologies. Ideal
                for professionals and students looking to stay ahead in a
                changing energy landscape.
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image9} alt="" />
            <h3>Rig Tour & Field Experience Day</h3>
            <h4>Onsite at an Oil Rig or Production Facility</h4>
            <div className="text">
              <h5>
                An exclusive opportunity to visit a real drilling or production
                site. Participants will interact with engineers, learn about
                daily operations, and get hands-on exposure to oil extraction
                techniques, safety protocols, and modern drilling equipment.
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image10} alt="" />
            <h3>SPE Hackathon: Smart Solutions for Oil & Gas</h3>
            <h4>University Lab / Tech Hub</h4>
            <div className="text">
              <h5>
                A 24-48 hour coding and problem-solving competition where teams
                develop innovative software or digital solutions for the
                petroleum industry. Topics may include AI in drilling, real-time
                monitoring, and predictive maintenance for equipment.
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image11} alt="" />
            <h3>Women in Energy Leadership Forum</h3>
            <h4>Business School Auditorium / Hybrid Event</h4>
            <div className="text">
              <h5>
                A networking and mentorship event dedicated to empowering women
                in petroleum engineering. Industry leaders will share insights
                on career growth, leadership opportunities, and strategies for
                breaking barriers in the oil & gas sector.
              </h5>
            </div>
            <button>Learn More</button>
          </div>
          <div className="event-card">
            <img src={assets.image12} alt="" />
            <h3>Future Energy Debate: Fossil Fuels vs. Renewables</h3>
            <h4>Engineering Department Lecture Hall</h4>
            <div className="text">
              <h5>
                A lively debate where students and industry experts discuss the
                future of fossil fuels versus renewable energy. Key topics
                include energy security, sustainability, and economic impacts,
                making it a must-attend for those passionate about the
                industry’s future.
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
