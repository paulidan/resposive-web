import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Menu2Page(){
    return (
        <div className="App">
          <div id="header"> 
            <Header />
            <div id="menu">
            <Navbar />
          </div>
          </div>
          
          <div>
              MENU2
          </div>
        </div>
      );
}

export default Menu2Page