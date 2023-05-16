import React, { useEffect, useState } from "react";
import { News, Tollbar, Weather } from "./components";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=a40e983e8a394daabe8ba0d50eeddc6a"
      )
      .then(({ data }) => setNews(data.articles));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=78e4fc4dbafe4b36647459125f96133b`
        )
        .then(({ data }) => setWeather(data));
    });
  }, []);

  return (
    <div className="container">
      <Tollbar />
      <div className="article">
        <div className="article__container">
          <News items={news} />
        </div>
      </div>
      <Weather items={weather} />
    </div>
  );
}

export default App;
