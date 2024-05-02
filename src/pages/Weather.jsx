import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import MainCard from "../components/MainCard";
import FullDayCard from "../components/FullDayCard";
import WeeklyCard from "../components/WeeklyCard";
import '../css/weather.css';
import { getBackgroundStyle } from "../components/utils";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [backgroundStyle, setBackgroundStyle] = useState({});

    const key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
                );
                const weatherData = response.data;
                if (weatherData.list && weatherData.list.length > 0) {
                    setWeatherData(weatherData);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Fetch weather data only if the city is provided
        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    useEffect(() => {
        if (weatherData) {
            const weatherCondition = weatherData.list[0].weather[0].main.toLowerCase();
            setBackgroundStyle(getBackgroundStyle(weatherCondition));
        }
    }, [weatherData]);

    return (
        <div className="full" style={backgroundStyle}>
            <Searchbar city={city} setCity={setCity} setWeatherData={setWeatherData} />
            {weatherData && <MainCard weatherData={weatherData} />}
            {<FullDayCard weatherData={weatherData} />}
            {weatherData && <WeeklyCard weatherData={weatherData} />}
        </div>
    );
}
