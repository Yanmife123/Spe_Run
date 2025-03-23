import "./Header.css";
import NavBar from "./NavBar";

export default function Header({ pageTitle, icon }) {
  return (
    <header>
      <NavBar />
      <section className="hero">
        <h1>{pageTitle}</h1>
        <img src={icon} alt="" />
      </section>
    </header>
  );
}
