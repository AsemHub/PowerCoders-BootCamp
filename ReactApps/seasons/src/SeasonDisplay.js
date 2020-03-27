import "./SeasonDisplay.css";
import React from "react";
import Clock from "./Clock";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!!",
    iconName: "sun"
  },
  winter: {
    text: "It's cold out there!!",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.Lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>
        {text} <Clock />
      </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
