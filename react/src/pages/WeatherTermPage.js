import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import { weatherApi } from '../components/Weather/Api';
import Forecast from '../components/Weather/Forecast/Forecast';

const WeatherTermPage = () => {
  const [forecast, setForecast] = useState(null);

  const handleSearch = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchForecast = fetch(
      `${weatherApi.base}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`
    );

    Promise.all([fetchForecast])
      .then(async (response) => {
        const forecastResponse = await response[0].json();
        forecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  console.log(forecast);

  return (
    <div className="App">
        <Header />
        <Navbar />
        <ButtonsWeather />
        <Forecast />
    </div>
  );
}

export default WeatherTermPage;