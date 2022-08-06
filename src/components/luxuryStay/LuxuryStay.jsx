import React from "react";
import Feature from "../feature/Feature";
import "./luxuryStay.css";
import displayImage from "../../assets/Club.jpeg";

function LuxuryStay() {
  return (
    <div className="luxuryStay__wrapper">
      {/* left side */}
      <div className="luxuryStay__leftSection relative w-[50%]">
        <div className="luxuryStay__smallHeading">luxury</div>
        <div className="luxuryStay__largeHeading">Stay</div>
        <div className="luxuryStay__paragraph">
          Select your very own private paradise from our extensive selection of
          exclusive accommodation options! Boasting idyllic interiors, stunning
          ocean views, and a variety of amazing benefits, the modern and cosy
          abodes ensure you a Memorable Holiday experience!
        </div>
      </div>
      {/* right side */}
      <div className="luxuryStay__rightSection">
        <img src={displayImage} />
      </div>
    </div>
  );
}

export default LuxuryStay;
