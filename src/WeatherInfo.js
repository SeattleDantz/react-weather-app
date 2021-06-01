import React from "react";
import ReadableDate from "./ReadableDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span className="localTimeMessage">(your local time)</span>
              <ReadableDate date={props.data.date} />{" "}
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4">
          <div className="clearfix todaysTemp">
            <div className="float-left">
              <WeatherIcon icon={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature farenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul className="todaysHumWind">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
