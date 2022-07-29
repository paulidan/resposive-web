import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';
import TodaysWeather from '../components/Weather/TodaysWeather/TodaysWeather';

const WeatherPage = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ButtonsWeather />
      <TodaysWeather />
    </div>
  );
}

export default WeatherPage;