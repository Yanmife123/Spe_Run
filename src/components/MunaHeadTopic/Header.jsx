import "./Header.css";

export default function HeadTopic({ pageTitle, icon }) {
  return (
    <div>
      <section className="hero">
        <h1>{pageTitle}</h1>
        <img src={icon} alt="" />
      </section>
    </div>
  );
}
