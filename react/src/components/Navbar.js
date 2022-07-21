import Styles from './Navbar.module.css';
import logo from '@/icons/desktop/Logo.png';
import { Link } from 'react-router-dom';


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
                    <Link className={Styles.nav_item} to="/">Home</Link>
                  </div>
                </li>
                <li className={Styles.nav_link}>
                  <div className={Styles.nav_item}>
                    <Link className={Styles.nav_item} to="/menu2">Menu2</Link>
                  </div>
                </li>
                <li className={Styles.nav_link}>
                  <div className={Styles.nav_item}>
                   <Link className={Styles.nav_item} to="/menu3">Menu3</Link>
                  </div>
                </li>
                <li className={Styles.nav_link }>
                 <div className={Styles.nav_item}>
                   <Link className={Styles.nav_item} to="/pogoda">Pogoda</Link>
                  </div>
                </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;