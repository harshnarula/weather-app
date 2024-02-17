import React from "react";
import '../css/maincard.css'
// import { WiThunderstorm } from 'react-icons/wi';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WeatherIcon from './WeatherIcon';

export default function MainCard({weatherData}){

    const date = weatherData.list[0].dt_txt.split(" ");
    let dateRev = date[0].split("-") // billa: use camelCase, not snake_case (snake_case is for python)
    const visibility = (weatherData.list[0].visibility/10000)*100
    const pressure = weatherData.list[0].main.pressure/10
    
    return(
        <div className = 'maincard'>
            <div className= "city-details">
                <p className= "city">{weatherData.city.name}</p>
                <p className = 'date'>{[dateRev[2],"-",dateRev[1],"-",dateRev[0]]}</p>
            </div>
            <div className = 'city-weather-forecast'>
                <div className = 'city-weather'>
                    
                    <div className= "city-weather-flex">
                        <div className = 'weather-main-align'>
                            <div className = 'weather-img-box'>
                                <WeatherIcon code={weatherData.list[0].weather[0].id}   />
                            </div>
                            <p className = 'weather-name'>{weatherData.list[0].weather[0].main}</p>
                        </div>
                        
                        <p className = 'city-temp'>{weatherData.list[0].main.temp}°C</p>
                    </div>
                    
                </div>
                <div className = 'city-weather-details'>          
                    <div className= "air-box">
                        {<AirIcon style= {{marginTop: '5px'}} />}
                        <p className = 'air-prob'>{weatherData.list[0].wind.speed}km/h</p>
                    </div>
                    <div className= "wind-box">
                        {<WaterDropIcon style= {{marginTop: '5px'}} />}
                        <p className = "wind-prob">{weatherData.list[0].main.humidity}%</p>
                    </div>
                    <div className= "pressure-box">
                        {<ThermostatIcon style= {{marginTop: '5px', marginRight: '2px'}} />}
                        <p className = "pressure-prob">{pressure}hPa</p>
                    </div>
                </div>
            </div>
            <div className = 'visibility'>
                <p className= "visibility-value">Visibility: {visibility.toFixed(2)}%</p>
            </div>
        </div>
    )
}