import { useState } from 'react';
import { WEATHER_API } from '../components/Weather/Api';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import Search from '../components/Weather/SearchBar/Search';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';

const WeatherSearchPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleSearch = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const getApi = axios.get(
      `${WEATHER_API.base}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API.key}&units=metric`
    ).then((response) => {
      console.log("data", response)
      setCurrentWeather({ city: searchData.label, ...response.data });
    });
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <ButtonsWeather />
      <Search onSearchChange={handleSearch} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default WeatherSearchPage;