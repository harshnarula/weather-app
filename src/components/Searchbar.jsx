import React, { useEffect, useState } from "react";
import '../css/searchbar.css';
import axios from 'axios';

export default function Searchbar({ city, setCity, setWeatherData }) {
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = async () => {
    try {   
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      const weatherData = response.data;

      if (weatherData.list && weatherData.list.length > 0) {
        setWeatherData(weatherData);
        setError(null);
      } else {
        setError('No weather data found.');
      }

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Enter City"
        className="search-city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className = 'search-btn'>Search</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
