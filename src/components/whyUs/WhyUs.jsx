import React from "react";
import Feature from "../feature/Feature";
import "./whyUs.css";

function WhyUs() {
  return (
    <div className="whyUs">
      {/* titld icon */}
      <img
        src={require("../../img/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline">
        <span>Why book with us</span>
      </div>
      <div className="headline__paragraph">
        Competitive best in class service, a multitude of exclusive
        accommodation options, idyllic location, a night club that is open to
        non-resident guests and a host of exclusive privileges - there are many
        reasons as to why you should book a stay at our property! Here are some
        of the most profound reasons why securing a stay at Araliya Beach Resort
        & Spa is advantageous.
      </div>
      {/* features  */}
      <div className="features">
        <Feature
          icon="dressing-room"
          title="For Live Music"
          description="UNIQUE VISTAS OF THE SOUTHERN COAST FROM ALL ACCOMMODATION OPTIONS"
        />
        <Feature
          icon="dining-set"
          title="For Daily Music"
          description="WORLD CLASS DINING EXPERIENCE WITH 12 PREMIER RESTAURANTS AND BARS"
        />
        <Feature
          icon="mountain-landscape"
          title="For Artists"
          description="WELL-CURATED LIST OF EXCURSIONS TO SURROUNDING ATTRACTIONS"
        />
        <Feature
          icon="beach"
          title="For Artists"
          description="DIRECT ACCESS TO THE BEACH AND A HOST OF EXCLUSIVE PRIVILEGES"
        />
      </div>
    </div>
  );
}

export default WhyUs;
