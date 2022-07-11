import Styles from './Navbar.module.css';

function Navbar(){
    return(
        <div id="menu">
            <div className="navbar">
                <div id={logo}>
                  <img src={logo} alt="logo" />
                </div>    
                <ul className="main-nav">
                <li className="nav-link active">
                  <div className="nav-item">
                    <a className="nav-item" href="#">Home</a>
                  </div>
                </li>
                <li className="nav-link">
                  <div className="nav-item">
                    <a className="nav-item" href="#">Menu2</a>
                  </div>
                </li>
                <li className="nav-link">
                  <div className="nav-item">
                   <a className="nav-item" href="#">Menu3</a>
                  </div>
                </li>
                <li className="nav-link ">
                 <div className="nav-item">
                   <a className="nav-item" href="#">Pogoda</a>
                  </div>
                </li>
                </ul>
            </div>
        </div>

    );
}