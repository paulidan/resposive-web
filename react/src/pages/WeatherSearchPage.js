import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import Search from '../components/Weather/SearchBar/Search';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { weatherApi } from '../components/Weather/Api';

const WeatherSearchPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  
  const handleSearch = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchCurrentWeather = fetch(
      `${weatherApi.base}/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`
    );

    Promise.all([fetchCurrentWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });

      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);

  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="menu">
        <Navbar />
      </div>
      <div>
        <ButtonsWeather />
      </div>
      <div className="searchbar">
        <Search onSearchChange={handleSearch} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </div>
  );
}

export default WeatherSearchPage;