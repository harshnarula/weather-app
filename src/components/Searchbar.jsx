import React, { useEffect, useState } from "react";
import '../css/searchbar.css';
import axios from 'axios';
// cb99a3d3cde4925fc26faf0168189024
export default function Searchbar({ city, setCity, setWeatherData }) {
  const [error, setError] = useState(null);
  // const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const apiKey = 'cb99a3d3cde4925fc26faf0168189024';

  const handleSearch = async () => {
    try {   
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      const weatherData = response.data;

      // Check if the 'weather' array is present in the response
      if (weatherData.list && weatherData.list.length > 0) {
        // Log the main types from the first forecast entry
        console.log('Temperature:', weatherData.list[0].main.temp);
        console.log('Pressure:', weatherData.list[0].main.pressure);
        console.log('Humidity:', weatherData.list[0].main.humidity);

        // Update the state with the fetched weather data
        setWeatherData(weatherData);
        setError(null); // Reset error if there was any

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
