import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import Forecast from '../components/Weather/Forecast/Forecast';
import TodaysWeather from '../components/Weather/TodaysWeather/TodaysWeather';

const WeatherTermPage = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ButtonsWeather />
      <TodaysWeather />
      <Forecast />
    </div>
  );
}

export default WeatherTermPage;