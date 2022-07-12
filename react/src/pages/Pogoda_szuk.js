import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';
import CurrentWeather from '../components/Weather/CurrentWeather';
function PogodaSzukPage(){
    return (
        <div className="App">
          <div id="header"> 
            <Header />
          </div>
          <div id="menu">
            <Navbar />
          </div>
          <div>
            <ButtonsPogoda />
          </div>
          <div id="weather">
            <CurrentWeather />
            </div>
        </div>
      );
}

export default PogodaSzukPage;