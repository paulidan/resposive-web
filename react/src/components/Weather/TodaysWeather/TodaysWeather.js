import React, { Component, useEffect, useState } from "react";
import Weather from './TodaysWeather.module.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import { Dimmer, Loader } from 'semantic-ui-react';
import { weatherApi } from '../Api';

const TodaysWeather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeather(lat, lon)
        .then(weather => {
          setWeatherData(weather);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        });
    })
  }, [])


  const handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Proszę włączyć swoją lokalizację na urządzeniu!");
    }
  }

  const getWeather = (lat, lon) => {
    return fetch(
      `${weatherApi.base}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${weatherApi.key}`
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