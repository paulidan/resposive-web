import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';

const WeatherPage = () => {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <ButtonsWeather />
    </div>
  );
}

export default WeatherPage;