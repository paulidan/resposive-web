import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import Search from '../components/Weather/SearchBar/Search';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { weatherApi } from '../components/Weather/Api';
import Forecast from '../components/Weather/Forecast/Forecast';

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
      .catch(console.log);
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