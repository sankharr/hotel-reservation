import React from "react";
import Feature from "../feature/Feature";
import "./offers.css";
import leftImage from "../../assets/araliya-unawtuna-1920.jpeg";

function Offers() {
  return (
    <div className="offers__wrapper">
      {/* left side */}
      <div className="offers__leftSection">
        <img src={leftImage} />
      </div>
      {/* right side */}
      <div className="offers__rightSection relative w-[50%]">
        <div className="offers__smallHeading">exclusive</div>
        <div className="offers__largeHeading">offers</div>
        <div className="offers__paragraph">
          Take advantage of our lucrative offers that come replete with amazing
          discounts and a host of exclusive privileges to enjoy a relaxing yet
          affordable vacation experience!
        </div>
      </div>
    </div>
  );
}

export default Offers;
