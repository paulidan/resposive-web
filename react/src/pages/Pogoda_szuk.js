import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';
import Search from '../components/Weather/Search';
import CurrentWeather from '../components/Weather/CurrentWeather';
import { weatherApi } from '../components/Weather/Api';
import { useState } from 'react';

function PogodaSzukPage(){

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherApi.base}/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`
    );
    const forecastFetch = fetch(
      `${weatherApi.base}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="menu">
        <Navbar />
      </div>
      <div>
        <ButtonsPogoda />
      </div>
      <div className="searchbar">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </div>
  );
}

export default PogodaSzukPage;