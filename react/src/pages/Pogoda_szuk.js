import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';
import CurrentWeather from '../components/Weather/CurrentWeather';
import Search from '../components/Weather/Search';
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
          <div id="searchbar">
            <Search />
          </div>
          <div id="weather">
            <CurrentWeather />
            </div>
        </div>
      );
}

export default PogodaSzukPage;