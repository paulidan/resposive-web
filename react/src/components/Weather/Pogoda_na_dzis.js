import React, { useEffect, useState } from "react";
import Pogoda from './Pogoda_na_dzis.module.css';
import Weather from './Weather';
import { Dimmer, Loader } from 'semantic-ui-react';
export default function Pogoda_na_dzis() {

 
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
  
    const [Error, setError] = useState(null);
  
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
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
  
  
    }, [lat,long])

    function handleResponse(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Please Enable your Location in your browser!");
        }
      }
    
      function getWeather(lat, long) {
        return fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
          .then(res => handleResponse(res))
          .then(weather => {
            if (Object.entries(weather).length) {
              const mappedData = mapDataToWeatherInterface(weather);
              return mappedData;
            }
          });
      }
    
      function mapDataToWeatherInterface(data) {
        const mapped = {
          date: data.dt * 1000, // convert from seconds to milliseconds
          description: data.weather[0].main,
          temperature: Math.round(data.main.temp),
        };
      
        // Add extra properties for the five day forecast: dt_txt, icon, min, max
        if (data.dt_txt) {
          mapped.dt_txt = data.dt_txt;
        }
      
        return mapped;
      }
      
      return (
        <div className={Pogoda.Pogoda_na_dzis}>
          {(typeof weatherData?.main != 'undefined') ? (
            <div>
              <Weather weatherData={weatherData}/>
              
            </div>
          ): (
            <div>

              <Dimmer active>
                <Loader>Ladowanie...</Loader>
              </Dimmer>
            </div>
          )}
        </div>
      );
    }