import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import TodaysWeather from '../components/Weather/TodaysWeather/TodaysWeather';

const WeatherPage = () => {
  return (
    <div className="App">
      <div id="header">
        <Header />
        <div id="menu">
          <Navbar />
        </div>
      </div>

      <div>
        <ButtonsWeather />
      </div>
      <div id="weather2">
        <TodaysWeather />
      </div>
    </div>
  );
}

export default WeatherPage;