import React, { useState, useEffect } from 'react';
import WeatherDisplay from './weatherDisplay';
import Input from './input';
import styles from './css.module.css';
 

function App() {
  const [cityName, setCityName] = useState('Rio de Janeiro');
  const [currentCity, setCurrentCity] = useState('Rio de Janeiro');
  const [countryName, setCountryName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'dae03b9785fe94fb3713f7e1057b7a1e';

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleFetchWeather = () => {
    setCurrentCity(cityName);
    setCityName('');
  };

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setCountryName(data.city.country);
        } else {
          console.error('Erro ao buscar os dados da API');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    if (currentCity) {
      fetchWeatherData();
    }
  }, [apiKey, currentCity]);
  
  //data do tempo!!
  const formatWeatherData = () => {
    if (weatherData) {
      const currentWeather = weatherData.list.find((item) => {
        const currentTime = new Date().getTime();
        const forecastTime = new Date(item.dt * 1000).getTime();
        return currentTime <= forecastTime;
      });

      if (currentWeather) {
        const main = {
          country: weatherData.city.country,
          tempMin: currentWeather.main.temp_min,
          tempMax: currentWeather.main.temp_max,
          rain: currentWeather.rain ? currentWeather.rain['3h'] : 0,
          windSpeed: currentWeather.wind.speed,
          tempNow: currentWeather.main.temp,
          feelsLike: currentWeather.main.feels_like,
          condition: currentWeather.weather[0].main.toLowerCase(),
        };

        return main;
      }
    }

    return null;
  };

  const mainWeather = formatWeatherData();

  return (
    <div>
      <div className={styles.App}>
      <Input
        cityName={cityName}
        handleCityChange={handleCityChange}
        handleFetchWeather={handleFetchWeather}
      />
      <WeatherDisplay
        currentCity={currentCity}
        countryName={countryName}
        mainWeather={mainWeather}
      />
      </div>
    </div>
  );
}

export default App;

