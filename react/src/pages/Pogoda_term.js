import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';

const WeatherTermPage = () => {

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
    </div>
  );
}

export default WeatherTermPage;