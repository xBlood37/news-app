import React from "react";

function Weather({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="weather">
      <div className="card card--grid card--p-24 card--m-20">
        <h1 className="card__title">Weather</h1>
        <span className="card__name">{items.name}</span>
        <span className="card__country">{items.sys.country}</span>
        <span className="card__temp">{(items.main.temp - 273).toFixed(1)}</span>
        <span className="card__temp-max">
          {(items.main.temp_max - 273).toFixed(1)}
        </span>
        <span className="card__temp-min">
          {(items.main.temp_min - 273).toFixed(1)}
        </span>
      </div>
      <div className="card card--p-24 card--m-20">
        <h2 className="card__subtitle">Information</h2>
        <p className="card__info">
          Used the free public api from
          <br />
          <a href="http://openweathermap.org">openweathermap.org</a>
          <br />
          <a href="http://newsapi.org">newsapi.org</a>
        </p>
      </div>
      <div className="card card--p-24">
        <h3 className="about-title">About</h3>
        <p className="card__info"></p>
      </div>
    </div>
  );
}

export default Weather;
