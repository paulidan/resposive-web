import React, { useEffect, useState } from "react";
import Weather from "./TodaysWeather.module.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { Dimmer, Loader } from "semantic-ui-react";
import { WEATHER_API } from "../Api";
import axios from "axios";

const TodaysWeather = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [weatherData, setWeatherData] = useState([]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setLat(lat);
      setLon(lon);
    })
  }, [])

  useEffect(() => {
    if (lat, lon) { getWeather(lat, lon); }
  }, [lat, lon])

  const getWeather = async (lat, lon) => {
    console.log("location", lat, lon)
    axios.get(`${WEATHER_API.base}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API.key}&units=metric`)
      .then((response) => {
        console.log("data", response)
        setWeatherData({ ...response.data })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className={Weather.TodaysWeather}>
      {!!weatherData && !!weatherData?.main ? (
        <div>
          <CurrentWeather data={weatherData} />
        </div>
      ) : (
        <div className={Weather.Dimmerr}>
          <Dimmer active>
            <Loader>Ladowanie...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
      }
export default TodaysWeather