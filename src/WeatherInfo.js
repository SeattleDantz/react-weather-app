import React from "react";
import ReadableDate from "./ReadableDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <span className="localTimeMessage">(your local time)</span>
          <ReadableDate date={props.data.date} />{" "}
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon icon={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature farenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
