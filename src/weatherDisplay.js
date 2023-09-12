import React from 'react';
import styles from './css.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake} from '@fortawesome/free-solid-svg-icons';

function WeatherDisplay({ currentCity, countryName, mainWeather }) {

  const getWeatherIcon = () => {
    if (mainWeather) {
      switch (mainWeather.condition.toLowerCase()) {
        case 'clear':
          return <FontAwesomeIcon icon={faSun} />;
        case 'mist':
        case 'haze':
        case 'fog':
        case 'clouds':
          return <FontAwesomeIcon icon={faCloud} />;
        case 'storm':
        case 'rain':
        case 'drizzle':
          return <FontAwesomeIcon icon={faCloudRain} />;
        case 'snow':
          return <FontAwesomeIcon icon={faSnowflake} />;
        default:
          return null;
      }
    }

    return null;
  };

  const weatherIcon = getWeatherIcon();

  return (
    <div className={styles.weatherDisplay}>
      <h2 className={styles.h2}>
        {currentCity}, {countryName}
      </h2>
      {mainWeather ? (
        <div>
          <div className={styles.icon}>{weatherIcon}</div>
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