import React from 'react';

function WeatherDisplay({ currentCity, countryName, mainWeather }) {
  return (
    <div>
      <h2>
        {currentCity}, {countryName}
      </h2>
      {mainWeather ? (
        <div>
          <p>Temp Right Now: {mainWeather.tempNow}</p>
          <p>Feels Like: {mainWeather.feelsLike}</p>
          <p>Temp Min: {mainWeather.tempMin}</p>
          <p>Temp Max: {mainWeather.tempMax}</p>
          <p>Rain: {mainWeather.rain} mm</p>
          <p>Wind Speed: {mainWeather.windSpeed} m/s</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;
