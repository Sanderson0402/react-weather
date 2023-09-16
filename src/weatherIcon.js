import React from "react";
import styles from './css.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({ condition }) => {
  const getWeatherIcon = () => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <FontAwesomeIcon icon={faSun} />;
      case "mist":
      case "haze":
      case "fog":
      case "clouds":
        return <FontAwesomeIcon icon={faCloud} />;
      case "storm":
      case "rain":
      case "drizzle":
        return <FontAwesomeIcon icon={faCloudRain} />;
      case "snow":
        return <FontAwesomeIcon icon={faSnowflake} />;
      default:
        return null;
    }
  };

  const weatherIcon = getWeatherIcon();
  return <div className={styles.icon}>{weatherIcon}</div>;
};

export default WeatherIcon;