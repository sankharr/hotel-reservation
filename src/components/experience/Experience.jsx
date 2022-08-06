import React from "react";
import Feature from "../feature/Feature";
import "./experience.css";
import displayImage from "../../assets/Club.jpeg";
import ExperienceListItem from "./ExperienceListItem";

function Experience() {
  return (
    <div className="experience__wrapper">
      {/* left side */}
      <div className="experience__leftSection relative w-[50%]">
        <div className="experience__smallHeading">things to</div>
        <div className="experience__largeHeading">experience</div>
        <div className="experience__paragraph">
          While enjoying the luxury at our premises, you can also get these
          beautiful experiences
        </div>
      </div>
      {/* right side */}
      <div className="experience__rightSection">
        {/* <img src={displayImage} /> */}
        <div className="experience__list">
          <ExperienceListItem
            title="Diving in Unawatuna"
            description="Witness rare and elusive creatures that dwell in the tropical waters"
          />
          <ExperienceListItem
            title="Galle Fort"
            description="One of the most historically significant attractions in Sri Lanka."
          />
          <ExperienceListItem
            title="Surfing at Unawatuna"
            description="Feel the rush of adrenaline by riding challenging waves!"
          />
          <ExperienceListItem
            title="Unawatuna Fruit Market"
            description="Savour fruits that you won't find anywhere else on the planet!"
          />
          <ExperienceListItem
            title="Mihiripenna Beach"
            description="An exquisite beach that boasts immaculate vistas!"
          />
          <ExperienceListItem
            title="Turtle Hatchery"
            description="Spend a day with one of the most gentle creatures of the ocean!"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
