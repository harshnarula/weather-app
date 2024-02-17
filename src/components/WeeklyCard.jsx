import React from "react";
import '../css/weeklycard.css'
import WeatherIcon from './WeatherIcon';

export default function WeeklyCard({weatherData}){

    let weeklyWeather = [[], [], [], [], []]
    let count = 0 
    let dayProb = ''
    let results = []
    let icons = []
    let week = []
    let date = ''
    
    // billa: do not use for loop in the body of component, put this code inside useEffect
    for(let i = 0; i <= weatherData.list.length - 1; i++){
        if(count <= 7){
            weeklyWeather[0].push(weatherData.list[i].weather[0].main)
            count++
        }
        else if(count <= 15){
            weeklyWeather[1].push(weatherData.list[i].weather[0].main)
            count++
        }
        else if(count <=23){
            weeklyWeather[2].push(weatherData.list[i].weather[0].main)
            count++
        }
        else if(count <=31){
            weeklyWeather[3].push(weatherData.list[i].weather[0].main)
            count++
        }
        else if(count <= 40){
            weeklyWeather[4].push(weatherData.list[i].weather[0].main)
            count++
        }

    }
    console.log(weeklyWeather)
    // console.log(weatherData.list)

   

    function weatherProbability(values) {
        const weatherCount = {};
      
        // Count the occurrences of each value
        values.forEach((value) => {
          weatherCount[value] = (weatherCount[value] || 0) + 1;
        });
      
        // Find the value with the maximum count
        let fullDayWeather = null;
        let maxCount = 0;
      
        Object.keys(weatherCount).forEach((key) => {
          if (weatherCount[key] > maxCount) {
            fullDayWeather = key;
            maxCount = weatherCount[key];
          }
        });
      
        return fullDayWeather;
      }
    
    function weatherIcon(day){
        if(day === "Clear"){
            return 800
        }
        else if(day === "Clouds"){
            return 801
        }
        else if(day === "Rain"){
            return 500
        }
        else if(day === "Thunderstorm"){
            return 200
        }
        else if(day === "Snow"){
            return 600
        }
    }


    
      for(let j = 0; j <= weeklyWeather.length - 1; j++){
      dayProb = weatherProbability(weeklyWeather[j])
      let icon = weatherIcon(dayProb)
      results.push(dayProb)
      icons.push(icon)

      }
      console.log(results)
      console.log(icons)
    // console.log(weeklyWeather)
    



    for (let i = 0; i < weatherData.list.length - 1 && week.length < 5; i++) {
        const currentData = weatherData.list[i];
        const nextData = weatherData.list[i + 1];

        const currentDateTime = currentData.dt_txt.split(' ');
        const nextDateTime = nextData.dt_txt.split(' ');

            if (currentDateTime[0] === nextDateTime[0] && currentDateTime[1] === '00:00:00') {
                    date = currentDateTime[0].split("-")
                    const weatherInfo = {
                        dayWeather: results[week.length], 
                        icon: <WeatherIcon code={icons[week.length]} />,
                        time: [date[2],"-",date[1],"-",date[0]]
                    };

                week.push(weatherInfo);
                
                count++
            }     
    }
    // console.log(results)

    return(
        <>
            <div className= 'week-forecast-header-box'>
                <p className = 'week-forecast-header'>Week's Forecast</p>
            </div>
            <div className = 'week'>
                {week && week.map((day, index) => {
                    return(
                        <div key={index} className='week-card'>
                                <div className= "week-icon">
                                    <p>{day.icon}</p>
                                </div>
                                <p className='week-weather'>{day.dayWeather}</p>
                                <p className='week-day'>{day.time}</p>
                                </div>)
                })}
            </div>
        </>
        
        
    )
}