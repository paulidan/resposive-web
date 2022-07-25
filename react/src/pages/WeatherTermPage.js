import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import { weatherApi } from '../components/Weather/Api';
import Forecast from '../components/Weather/Forecast/Forecast';
import TodaysWeather from '../components/Weather/TodaysWeather/TodaysWeather';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';

const WeatherTermPage = () => {

  const [forecast, setForecast] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        setLat(lat);
        setLon(lon);
    })
  }, [])

  useEffect(() => {
    if(lat, lon) {getCurrentWeather(lat, lon); getForecast(lat, lon);}
  }, [lat, lon])

  const getCurrentWeather = (lat, lon) => {
   console.log("getCurrentWeather", lat, lon)
    axios.get(`${weatherApi.base}/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
      .then((response) => {
        console.log(response)
      })
  }
  const getForecast = (lat, lon) => {
    console.log("getForecast", lat, lon)

    axios.get(`${weatherApi.base}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
      .then((response) => {
        console.log(response);
        setForecast(response.data)
      })
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <ButtonsWeather />
      <TodaysWeather />
      <Forecast data={forecast} />
    </div>
  );
}

export default WeatherTermPage;