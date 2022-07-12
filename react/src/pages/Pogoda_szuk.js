import Navbar from '../components/Navbar';
import Header from '../components/Header';

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
              POGODA
          </div>
        </div>
      );
}

export default PogodaSzukPage;