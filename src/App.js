import "./index.css";
import React, { useState } from "react";

const api = {
  key: "afbbf14a8da37084c1a1faf890b54f13",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const [location, setLocation] = useState(' ')
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="app">
      <div className="searchBox">
        <input type="text" placeholder="Search Location..." onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchPressed} className="btn">
          Search
        </button>
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{weather.name}</p>
            </div>
            <div className="temp">
              <h1>{weather.main.temp}&deg;F</h1>
            </div>
            <div className="description">
              <p>{weather.weather[0].main}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">{weather.main.feels_like}&deg;F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">{weather.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{weather.wind.speed}MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
