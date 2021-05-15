import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="enter-city">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="submit"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Woodinville</h1>
      <ul>
        <li>Friday 21:00</li>
        <li>Clear</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              alt="Clear"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">57</span>{" "}
              <span className="units">℉</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 30%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 2 m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
