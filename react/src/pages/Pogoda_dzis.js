import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';
import Search from '../components/Weather/Search';


function PogodaDzisPage(){
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
          
        </div>
      );
}

export default PogodaDzisPage;