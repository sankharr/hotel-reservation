import { React, useState } from "react";
import DownloadAds from "../DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import "./intro.css";
import Header from "../header/Header";

function Intro() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <>
        <div className="outerDiv">
          <Header />
          <div className="wrapper">
            {/* left side */}
            <div className="headings">
              {/* <span>Araliya Beach Resort & Spa</span>{" "} */}
              <span>
                <b>Araliya Beach Resort & Spa</b>
              </span>
              <div className="introParagraphSection">
                <p className="introParaText">Embellished with the charms of immaculate beaches, lush coconut
                groves, and stunning oceanic vistas from all its abodes,
                Unawatuna Beach Resort & Spa is a premier amongst Unawatuna
                hotels! Being the first star-class and five-star hotel in
                Unawatuna, the property is composed of a wide array of exclusive
                accommodation options, bars, restaurants, boutiques, and
                entertainment hubs making it an idyllic destination to
                experience pure tropical bliss!</p>
              </div>
              {/* download ads */}
              
            </div>
            {/* right side */}
            <div className="images relative w-[50%]">
              
            </div>
          </div>
        </div>
      </>
    </VisibilitySensor>
  );
}

export default Intro;
