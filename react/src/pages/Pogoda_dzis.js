import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ButtonsPogoda from '../components/ButtonsPogoda';


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
          
        </div>
      );
}

export default PogodaDzisPage;