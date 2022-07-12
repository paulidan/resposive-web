import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CurrentWeather from '../components/Weather/CurrentWeather';

function PogodaPage(){
    return (
        <div className="App">
          <div id="header"> 
            <Header />
          </div>
          <div id="menu">
            <Navbar />
          </div>
          <div id='weather'>
            <CurrentWeather />
          </div>
        </div>
      );
}

export default PogodaPage;