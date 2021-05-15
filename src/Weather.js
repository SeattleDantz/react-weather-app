import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].main,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      ready: true,
      date: "Friday 21:00",
    });
  }

  if (weatherData.ready) {
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

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                alt={weatherData.description}
                src={weatherData.iconUrl}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="units">℉</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "551f8c89cdce818fb4f3b6e3fe374a5c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
