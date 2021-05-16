import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.farenheit)}</span>{" "}
        <span className="units">
          ℉ |{" "}
          <a href="/" onClick={convertToCelsius}>
            ℃
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round((5 / 9) * (Math.round(props.farenheit) - 32))}
        </span>{" "}
        <span className="units">
          <a href="/" onClick={convertToFarenheit}>
            ℉{" "}
          </a>
          | ℃
        </span>
      </div>
    );
  }
}
