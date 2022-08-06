import React from "react";
import './experience.css'

function ExperienceListItem({ title, description }) {
  return (
    <div className="experience__listItem">
      <div className="experience__listItemTitle">{title}</div>
      <div className="experience__listItemDescription">{description}</div>
    </div>
  );
}

export default ExperienceListItem;
