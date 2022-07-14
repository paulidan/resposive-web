import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';
import Pogoda_na_dzis from '../components/Weather/Pogoda_na_dzis';
import Weather from '../components/Weather/Weather';



function PogodaDzisPage(){
    return (
        <div className="App">
          <div id="header"> 
            <Header />
            <div id="menu">
            <Navbar />
          </div>
          </div>
          
          <div>
            <ButtonsPogoda />
          </div>
          <div id="weather2">
            
            <Pogoda_na_dzis />
            </div>
        </div>
      );
}

export default PogodaDzisPage;