import "./Content.css";

export default function Content({ children }) {
  return (
    <section className="content">
      <section className="content-wrapper">{children}</section>
    </section>
  );
}
