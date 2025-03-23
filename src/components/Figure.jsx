import "./Figure.css";

export default function Figure({ imgSource }) {
  return (
    <div className="figure-cap">
      <figure>
        <img src={imgSource} alt="" />
        {/*<div className="img"></div>*/}
      </figure>
      <figcaption>Trivia Night</figcaption>
    </div>
  );
}
