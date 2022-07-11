import Styles from './Navbar.module.css';
import logo from '../icons/desktop/Logo.png';


function Navbar(){
    return(
        <div id={Styles.menu}>
            <div className={Styles.navbar}>
                <div id={Styles.logo}>
                  <img src={logo} alt="logo" />
                </div>    
                <ul className={Styles.main_nav}>
                <li className={Styles.nav_link} active>
                  <div className={Styles.nav_item}>
                    <a className={Styles.nav_item} href="#">Home</a>
                  </div>
                </li>
                <li className={Styles.nav_link}>
                  <div className={Styles.nav_item}>
                    <a className={Styles.nav_item} href="#">Menu2</a>
                  </div>
                </li>
                <li className={Styles.nav_link}>
                  <div className={Styles.nav_item}>
                   <a className={Styles.nav_item} href="#">Menu3</a>
                  </div>
                </li>
                <li className={Styles.nav_link }>
                 <div className={Styles.nav_item}>
                   <a className={Styles.nav_item} href="#">Pogoda</a>
                  </div>
                </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;