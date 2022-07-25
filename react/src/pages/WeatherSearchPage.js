import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import Search from '../components/Weather/SearchBar/Search';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { weatherApi } from '../components/Weather/Api';
import Forecast from '../components/Weather/Forecast/Forecast';

const WeatherSearchPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const handleSearch = (searchData) => {
    // const [lat, lon] = searchData.value.split(" ");


  }
  const getCurrentWeather = (lat, lon) => {
    axios.get(`${weatherApi.base}/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
      .then((response) => {
        console.log(setCurrentWeather)
      })
  }
  const getForecast = (lat, lon) => {
    axios.get(`${weatherApi.base}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
      .then((response) => {
        console.log(setForecast)
      })
  }
  useEffect(() => {
    if (lat && lon) {
      getCurrentWeather(lat, lon);
      getForecast(lat, lon);
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
    }
  }, [lat, lon])


//   Promise.all([getCurrentWeather, getForecast])
//     .then(async (response) => {
//       const weatherResponse = await response[0].json();
//       const forcastResponse = await response[1].json();


//       ;
//     })
//     .catch(console.log);
// }

return (
  <div className="App">
    <Header />
    <Navbar />
    <ButtonsWeather />
    <Search onSearchChange={handleSearch} />
    {currentWeather && <CurrentWeather data={currentWeather} />}
    {forecast && <Forecast data={forecast} />}
  </div>
);
  }

export default WeatherSearchPage;