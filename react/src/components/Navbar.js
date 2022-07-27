import { NavLink, Link } from 'react-router-dom';
import logo from '@/icons/desktop/Logo.png';
import Styles from './Navbar.module.css';

const Navbar = () => {
    return(
      <div id={Styles.navbar}>
          <img src={logo} alt="logo" id={Styles.logo} />
          <ul id={Styles.mainNav}>
            <li className={Styles.navItem} active="true">
              <NavLink className={Styles.navLink} activeclassname={Styles.navItem} to="/">HOME</NavLink>
            </li>
            <li className={Styles.navItem}>
              <Link className={Styles.navLink} to="/menu2">MENU 2</Link>
            </li>
            <li className={Styles.navItem}>
              <Link className={Styles.navLink} to="/menu3">MENU 3</Link>
            </li>
            <li className={Styles.navItem }>
              <Link className={Styles.navLink} to="/pogoda">POGODA</Link>
            </li>
          </ul>
      </div>
    );
}

export default Navbar;