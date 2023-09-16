import React, { useState, useEffect } from 'react';
import Input from './input';
import WeatherDisplay from './weatherDisplay';
import ExtendedForecast from './extendedForecast';
import styles from './css.module.css';
 

function App() {
  const [cityName, setCityName] = useState('Rio de Janeiro');
  const [currentCity, setCurrentCity] = useState('Rio de Janeiro');
  const [countryName, setCountryName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherBackground, setWeatherBackground] = useState('');
  const apiKey = 'SUA KEY';

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleFetchWeather = () => {
    setCurrentCity(cityName);
    setCityName('');
  };

  //consumindo API
  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=metric`
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

    if (currentCity && currentCity.trim() !== '') {
      fetchWeatherData();
    }
  }, [apiKey, currentCity]);
  
  //formatando previsão atual
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
          tempMin: (currentWeather.main.temp_min).toFixed(1), 
          tempMax: (currentWeather.main.temp_max).toFixed(1),
          rain: currentWeather.rain ? currentWeather.rain['3h'] : 0,
          windSpeed: currentWeather.wind.speed,
          tempNow: (currentWeather.main.temp).toFixed(1),
          feelsLike: (currentWeather.main.feels_like).toFixed(1),
          condition: currentWeather.weather[0].main.toLowerCase(),
        };

        return main;
      }
    }

    return null;
  };

  const mainWeather = formatWeatherData();

  //formatando previsão estendida
  const formatExtendedWeatherData = () => {
    if (weatherData) {
      const upcomingWeather = weatherData.list.slice(1, 6);
  
      if (upcomingWeather.length > 0) {
        const formattedWeather = upcomingWeather.map((item) => {
          const forecastTime = new Date(item.dt * 1000); 
  
          return {
            forecastTime: forecastTime.toLocaleString(),
            tempMin: item.main.temp_min.toFixed(1),
            tempMax: item.main.temp_max.toFixed(1),
            tempNow: item.main.temp.toFixed(1),
            condition: item.weather[0].main.toLowerCase(), 
          };
        });
  
        return formattedWeather;
      }
    }
  
    return null;
  };

  const ExtendedWeather = formatExtendedWeatherData();

  //mudando o background de acordo com a condição meteorologica
  useEffect(() => {
    if (mainWeather) {
      const weatherCondition = mainWeather.condition.toLowerCase();

      switch (weatherCondition) {
        case 'clear':
          setWeatherBackground(styles.weatherClear);
          break;
        case 'mist':
        case 'haze':
        case 'fog':
        case 'clouds':
          setWeatherBackground(styles.weatherClouds);
          break;
        case 'storm':
        case 'rain':
        case 'drizzle':
          setWeatherBackground(styles.weatherRain);
          break;
        case 'snow':
          setWeatherBackground(styles.weatherSnow);
          break;
        default:
          setWeatherBackground('');
          break;
      }
    }
  }, [mainWeather]);

  return (
    <div>
      <div className={`${styles.App} ${weatherBackground}`}>
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
       <ExtendedForecast formattedWeather={ExtendedWeather} />
      </div>
    </div>
  );
}

export default App;

