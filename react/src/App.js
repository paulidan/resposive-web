//import logo from './logo.svg';
import layer_7 from './icons/desktop/Layer_7.png';
import layer_11 from './icons/desktop/Layer_11.png';
import layer_8 from './icons/desktop/Layer_8.png';
import layer_12 from './icons/desktop/Layer_12.png';
import layer_9 from './icons/desktop/Layer_9.png';
import layer_10 from './icons/desktop/Layer_10.png';
import './App.css';

function App() {
  return (

    <div className="App">
      <div id="header"> 
        <div class="background">
          <div class="heading">
            <h1> Feel the Power of Typography</h1>
          </div>
          <div class="boxes">
            <img src={layer_7} alt="typo box" />
            <img src={layer_11} alt="Typography" />
            <img src={layer_8} alt="resp box" />
            <img src={layer_12} alt="Responisive" />
            <img src={layer_9} alt="ux box" />
            <img src={layer_10} alt="UX" />
          </div>
        </div>
      </div>
      <div id="menu">
        <div class="logo">
          <img src="icons/desktop/Logo.png" alt="logo" />
        </div>
        <div id="menu-layer">
          <img src="icons/desktop/Layer_29_copy.png" alt="home" />
          <nav class="navbar">
            <div class="container">
              <div class="navbar-expand">
                <ul class="navbar-nav">
                  <li class="nav-item @@home">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item @@Menu2">
                    <a class="nav-link" href="#">Menu2</a>
                  </li>
                  <li class="nav-item @@Menu3">
                    <a class="nav-link" href="#">Menu3</a>
                  </li>
                  <li class="nav-item @@Pogoda">
                    <a class="nav-link" href="#">Pogoda</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
