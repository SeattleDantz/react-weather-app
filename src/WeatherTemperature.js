import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.farenheit)}</span>{" "}
      <span className="units">℉</span>
    </div>
  );
}
