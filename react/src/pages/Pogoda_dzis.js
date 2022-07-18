import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsWeather from '../components/ButtonsWeather';

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
            <Pogoda_na_dzis />
            </div>
        </div>
      );
}

export default WeatherPage;