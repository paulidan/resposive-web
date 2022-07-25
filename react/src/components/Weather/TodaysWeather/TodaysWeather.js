import React, { Component, useEffect, useState } from "react";
import Weather from './TodaysWeather.module.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import { Dimmer, Loader } from 'semantic-ui-react';
import {weatherApi} from '../Api';

const TodaysWeather = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    getWeather(lat, long)
      .then(weather => {
        setWeatherData(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [lat, long])

  const handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Proszę włączyć swoją lokalizację na urządzeniu!");
    }
  }

  const getWeather = (lat, long) => {
    return fetch(
      `${weatherApi.base}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${weatherApi.key}`
    )
      .then(res => handleResponse(res))
  }
  

  return (
    <div className={Weather.TodaysWeather}>
      {(!!weatherData && !!weatherData?.main) ? (
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