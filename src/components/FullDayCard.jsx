import React from 'react';
 // billa: removed unused imports
import '../css/fullday.css'
import WeatherIcon from './WeatherIcon';

export default function FullDayCard({weatherData}){
    const data = []
// billa: remove unused variables
 // nextdate - use camelCase
    let count = 0
    let counter = 0
    let time = ''
    let hour = ''
    let ts = ''

    function time_change(data){
        data = data
        if(data === 15){
            ts = data / 5
        }
        else if(data === 18){
            ts = data / 3
        }
        else if(data === 21){
            ts = data - 12
        }
        
        // console.log(ts)
        return ts
    }

   if(!weatherData){
        return;
   }
   else{
        const fulldayData = weatherData.list // billa: again violation of camelCase rule
        // console.log(fulldayData)
        // billa: can use fulldayData.map() instead of this while loop (all this code will come in 1 single line with .map())
        while(counter <= 0){
        for(let i = 0; i <= fulldayData.length - 1; i++){
            // date = fulldayData[i].dt_txt.split(" ")
            // console.log(date)
            if(count < 9){
                        data.push(fulldayData[i].dt_txt)
                        count++;
                    }
            
        
           
            // for(let j = i+1; j <= fulldayData.length - 1; j++){
            //     nextdate = fulldayData[j].dt_txt.split(" ")
            //     // console.log(nextdate)
                
            //     if(count < 7){
            //         data.push(fulldayData[j-1].dt_txt)
            //         count++;
            //     }
                
            // }
                
            }
        counter++;
            
        }
        console.log(data)

        

   }
   let timeShifter = (hour) => {
    // if (hour % 3 === 0 && hour >= 12) {
    //     if (hour === 0) {
    //         return "am"; // Special case: midnight
    //     } else {
    //         return "pm"; // After noon
    //     }
    // } else {
    //     return "am"; // Before noon
    // }
    if(hour % 3 === 0 && hour > 12){
        return " pm"
    }
    else if(hour === 12){
        return " pm"
    }
    else if(hour === 0){
        return " am"
    }
    else if(hour % 3 === 0 && hour <= 9){
        return " am"
    }
};
    let hourFormater = (hour) => {
        console.log("hourFormater: ", hour)
        if(hour >= 15){
            return time_change(hour)
        }
        else if(hour === 0){
            return 12
        }
        else {
            return hour
        }
    }
 
//    hour[0] % 3 === 0 && hour[0] >= 12 
//         ? hour === '00:00:00' && hour !== "12:00:00" ? ' am': ' pm' 
//         : ' am'

// hour[0] >= 15 
// ? time_change(hour[0])  
//     : hour[0] === '00' ? hour[0] = '12' : hour[0]}
    // billa: even below you have used for loop for looping through jsx, use .map()
    return(
    <>
        <div className= 'day-forecast-header-box'>
            <p className = 'day-forecast-header'>Today's Weather</p>
        </div>
        <div className = 'day'>
            <div className = 'day-cards-container'>
                {weatherData && weatherData.list.map((weather) => {
                    time = weather.dt_txt.split(" ")
                    hour = time[1].split(":")
                    for(let i = 0; i <= data.length - 1; i++){
                    if(weather.dt_txt === data[i]){
                    return(
                        <div key = {weather.dt} className = 'day-card'>
                            <div className = 'day-icon'>
                                <WeatherIcon code={weather.weather[0].id}  />
                            </div>
                            <p className= 'day-weather'>{weather.weather[0].main}</p>
                            <p className= 'day-time'>{hourFormater(parseInt(hour[0]))} 
                                                    
                                                    {timeShifter(parseInt(hour[0]))}</p> {/* billa: put this multiple conditions of logic in a function and use */}
                            {/* {hour[0]}:{hour[1]} */}
                        </div>
                    )
                    }
                    
                    else{
                        continue;
                    }
                }
                })}
            </div>
            
        </div>
    </>
    )
}