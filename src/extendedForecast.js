import React from "react";
import styles from './css.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons"; 

function ExtendedForecast({ formattedWeather }) {
  return (
    <div className={styles.extendedWeatherDisplay}>
      {formattedWeather ? (
        formattedWeather.map((item, index) => (
          <div key={index} className={`${styles.weatherCard} card`}>
            <p>{item.forecastTime}</p>
            {getWeatherIcon(item.condition)}
            <p>Min: {item.tempMin}°C</p>
            <p>Max: {item.tempMax}°C</p>
          </div>
        ))
      ) : (
        <p>Os dados do tempo não estão disponíveis ou não estão no formato esperado.</p>
      )}
    </div>
  );
}

function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case "clear":
      return <FontAwesomeIcon icon={faSun} className={styles.iconP} />;
    case "mist":
    case "haze":
    case "fog":
    case "clouds":
      return <FontAwesomeIcon icon={faCloud} className={styles.iconP} />;
    case "storm":
    case "rain":
    case "drizzle":
      return <FontAwesomeIcon icon={faCloudRain} className={styles.iconP} />;
    case "snow":
      return <FontAwesomeIcon icon={faSnowflake} className={styles.iconP} />;
    default:
      return null;
  }
}

export default ExtendedForecast;





