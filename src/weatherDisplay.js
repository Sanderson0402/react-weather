import React from 'react';
import WeatherIcon from './weatherIcon';
import styles from './css.module.css';

function WeatherDisplay({ currentCity, countryName, mainWeather }) {

  return (
    <div className={styles.weatherDisplay}>
      <h2 className={styles.h2}>
        {currentCity}, {countryName}
      </h2>
      {mainWeather ? (
        <div>
          <WeatherIcon condition={mainWeather.condition}/>
          <p className={styles.weatherTemp}>{mainWeather.tempNow} ºC</p>
          <div>
          <p>Feels Like: {mainWeather.feelsLike} ºC</p>
          <p>Temp Min: {mainWeather.tempMin}</p>
          <p>Temp Max: {mainWeather.tempMax}</p>
          <p>Rain: {mainWeather.rain} mm</p>
          <p>Wind Speed: {mainWeather.windSpeed} m/s</p>
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Carregando dados...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;