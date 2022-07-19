import React,{useState} from 'react';
import './App.css';

function App() {

  const apiKey='ac789174ec61c2db15cde5063c1c867b'
  const [weatherData,setWeatherData]=useState([{}])
  const [city,setCity]=useState('')
  
   const getWeather =(event)=>{
      if(event.key === 'Enter'){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
           response => response.json()
        ).then(
          data =>{
            setWeatherData(data)
            setCity('')
          }
        )
      }
   }



  return (
    <div className='Container'>
       <input className='infos' 
       placeholder='Enter city'
       onChange={e=>setCity(e.target.value)}
       value={city}
       onKeyPress={getWeather}
       />

         {typeof weatherData.main === 'undefined' ?(
             <div>
              <p className='kop'>Welcome , Please enter a city to get the weather</p>
             </div>
         ):(
          <div>
            <h1>{weatherData.name}</h1>
    
            <p className='tempo'>{Math.round(weatherData.main.temp)}<sup>0</sup>c</p>
            <p className='huma'>{weatherData.weather[0].main}</p>
          </div>
         )}

    </div>
  );
}

export default App;
