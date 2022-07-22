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


  //2. 
  // tutaj : const [lat, setLat] = useState([]); oznacza, że wsadzamy jako wartość domyślną []
  // a chyba tego nie chcemy tak zrobić bo potem widzę, że wsadzamy liczbę a nie tablice z liczbami więc proponuje 
  // albo tutaj ustawiamy jakąś wartość domyślną np dla Rybnika albo zostawiamy puste bez []
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const handleSearch = (searchData) => {
    // const [lat, lon] = searchData.value.split(" ");
    // 6. 
    // to wtedy jest całkowicie zbędne :) tak jak 7

  }
  const getCurrentWeather = (lat, lon) => {
    axios.get(`${weatherApi.base}/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
      .then((response) => {
        // 1. 
        // response to jest coś co dostaliśmy od kogoś i nie wiemy nawet co to jest ale się możemy spodziewać
        // najpierw sobie zróbcie console.log(response) żeby w ogóle sprawdzić co przyszło, w jakim formacie to mamy 
        // potem możemy ten response wsadzić w state czyli setCurrentWeather(response) ale bardzo możliwe że nie chcemy całego response
        // lepiej wyciągnąć już to co nas interesuje a najlepiej już to jakoś "obrobić" na taki format jaki chcemy
        // ale to już zależy od was co wam bardziej odpowiada dalej w apce
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
    // getCurrentWeather(lat, lon);
    // getForecast(lat, lon); to  przenosimy do 5
    navigator.geolocation.getCurrentPosition(function (position) {
      // const {
      //   coords : {
      //     latitude = 0,     <= taki zapis jest ładniejszy i wtedy dalej już nie używamy tych długich brzydkich position.coords.latitude tylko po prostu latitude
      //     longitude = 0
      //   } = {}
      // } = position;


      // 3.
      // to zadzieje się po strzałach po pogodę do których już tego potrzebujemy więc musimy coś pokombinować
      // 
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      // 5. 
      // tutaj proponuje przenieść  getCurrentWeather(lat, lon) i getForecast(lat, lon) i przekazywać position.coords.latitude i position.coords.longitude
      // wtedy mamy pewność że zapytamy o pogodę jak już mamy miejsce dla którego pytamy :) 

      // 4.
      // [lat, lon] - to znaczy, że jak lat lub lon się zmieni to odpalamy znowu więc można dać [] żeby
      // przy starcie apki to ustawić i jeżeli to otrzymamy od naszej przeglądarki to 5.
    }, [lat, lon])
  })

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
      {/* 
      7.
      Potrzebujemy tutaj komponent search skoro bierzemy dane z przeglądarki?
      */}
      <Search onSearchChange={handleSearch} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default WeatherSearchPage;