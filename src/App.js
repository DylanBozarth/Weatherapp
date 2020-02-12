import React, { useState } from 'react';
import './App.css';
/* api key be37111ec63e7fd3357da4e1cec0a989 */ 

const api = {
key: 'be37111ec63e7fd3357da4e1cec0a989',
base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  if (results === undefined)
  results = null

  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

const datebuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
  return (
    
    
    <div className="app">
      <main> 
<div className="search-box">
  <input type="text" placeholder="Search by city" className="search-bar"
   onChange={e => setQuery(e.target.value)} 
   value={query}
   onKeyPress={search}>Spokane</input>
   
  
  <div className="container location-box">
    <div className="location">{weather.name}, {weather.sys.country}</div>
    <div className="date">{datebuilder(new Date())}</div>
  </div>
</div>
<div className="weather-box">
  <div className="temp">
  {Math.round(weather.main.temp)}°c
    
  </div>

  <div className="weather">
{weather.weather[0].main}
  </div>
</div>
) : ('')}
      </main>
    </div>
  
  );
}

export default App;
