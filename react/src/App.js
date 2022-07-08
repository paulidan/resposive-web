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
                  
                  <ul class="main-nav">
                  <li class="nav-link active">
                    <div class="nav-item">
                      <a class="nav-item" href="#">Home</a>
                    </div>
                  </li>
                  <li class="nav-link">
                    <div class="nav-item">
                      <a class="nav-item" href="#">Menu2</a>
                    </div>
                  </li>
                  <li class="nav-link">
                    <div class="nav-item">
                     <a class="nav-item" href="#">Menu3</a>
                    </div>
                  </li>
                  <li class="nav-link ">
                   <div class="nav-item">
                     <a class="nav-item" href="#">Pogoda</a>
                    </div>
                  </li>
                  </ul>
          </div>
        
      </div>
    </div>
  );
}

export default App;
