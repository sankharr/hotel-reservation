import React from "react";
import Feature from "../feature/Feature";
import "./location.css";
import leftImage from "../../assets/arielView1.jpeg";

function Location() {
  return (
    <div className="location__wrapper">
      {/* left side */}
      <div className="location__leftSection">
        <img src={leftImage} />
      </div>
      {/* right side */}
      <div className="location__rightSection relative w-[50%]">
        <div className="location__smallHeading">convenient</div>
        <div className="location__largeHeading">location</div>
        <div className="location__paragraph">
          Located in short distance from the exit of southern express way, our
          property is easily accessible from Colombo and it is just minutes away
          from Galle – the capital city of the southern province and a world
          heritage site. Furthermore, our property is also located in proximity
          to a variety of well-renowned travel destinations on the southern
          coast.
        </div>
      </div>
    </div>
  );
}

export default Location;
