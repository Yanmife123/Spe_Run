import React from "react";
import "./Home.css";
import {
  Navbar,
  Introduction,
  Events,
  Team,
  Contact,
  Header,
  About,
  Footer,
} from "../../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
