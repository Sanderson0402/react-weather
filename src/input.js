import React from 'react';

function Input({ cityName, handleCityChange, handleFetchWeather }) {
  return (
    <div>
      <input
        type="text"
        id="cityInput"
        value={cityName}
        onChange={handleCityChange}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={handleFetchWeather}>Buscar</button>
    </div>
  );
}

export default Input;
