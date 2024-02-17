// WeatherIcon.js
import React from 'react';
import { WiThunderstorm, WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog } from 'react-icons/wi';

const WeatherIcon = ({ code }) => {
  // billa: bad structure by using switch case, use if else for this, like given below
  /* billa: 
    if(weatherCode >= 200 && weatherCode <= 202) {
      return <WiThunderstorm/>
    } etc etc etc ........
  */
  const getIcon = (weatherCode) => {
    if(weatherCode >= 200 && weatherCode <= 202){
      return <WiThunderstorm />;
    }
    else if(weatherCode == 800){
      return <WiDaySunny />;
    } 

      else if(weatherCode >= 801 && weatherCode <= 804){
        return <WiCloudy />;
      }

      else if(weatherCode >= 500 && weatherCode <= 504){
        return <WiRain />;
      }
      else if(weatherCode >= 600 && weatherCode <= 622){
        return <WiSnow />;
      }
      else{
        return <WiFog />;
      }
  };

  return <div>{getIcon(code)}</div>;
};

export default WeatherIcon;
