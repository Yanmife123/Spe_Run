import React from "react";
import MenuArrow from "../assets/menu-arrow.svg";
import "./SeeMore.css";

export default function SeeMore() {
  return (
    <div className="see-more">
      <h3>See More</h3>
      <div className="see-more-btn">
        <img src={MenuArrow} alt="" />
      </div>
    </div>
  );
}
