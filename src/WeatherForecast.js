import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon icon="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">75°</span>{" "}
            <span className="WeatherForecast-temperatures-min">55°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
