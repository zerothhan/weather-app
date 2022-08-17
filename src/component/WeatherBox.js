import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{Math.round(weather?.main.temp)}도 / {Math.round(weather?.main.temp * 9 / 5 + 32)}화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
