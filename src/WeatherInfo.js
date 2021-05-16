import React from "react";
import ReadableDate from "./ReadableDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <ReadableDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              alt={props.data.description}
              src={props.data.iconUrl}
              className="float-left"
            />
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
