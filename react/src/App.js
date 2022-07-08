//import logo from './logo.svg';
import layer_7 from './icons/desktop/Layer_7.png';
import layer_11 from './icons/desktop/Layer_11.png';
import layer_8 from './icons/desktop/Layer_8.png';
import layer_12 from './icons/desktop/Layer_12.png';
import layer_9 from './icons/desktop/Layer_9.png';
import layer_10 from './icons/desktop/Layer_10.png';
import logo from './icons/desktop/Logo.png';
import layer_29 from './icons/desktop/Layer_29_copy.png';
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
            <img src={layer_12} alt="Responsive" />
            <img src={layer_9} alt="ux box" />
            <img src={layer_10} alt="UX" />
          </div>
        </div>
      </div>
      <div id="menu">
        
          <div class="navbar">
                  <div id="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div id="menu-layer">
                    <img src={layer_29} alt="home" />
                  </div> 
                  <ul class="main-nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                    
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Menu2</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Menu3</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pogoda</a>
                  </li>
                  </ul>
          </div>
        
      </div>
    </div>
  );
}

export default App;
