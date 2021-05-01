import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="submit"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>

      <h3>Woodinville</h3>
      <ul>
        <li>Friday 21:00</li>
        <li>Clear</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            alt="Clear"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          />
          57 ℉
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
