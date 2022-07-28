import { NavLink, Link } from 'react-router-dom';
import logo from '@/icons/desktop/Logo.png';
import img_tablet_icon from '@/icons/tablet/Icon_cb.png';
import img_phone_icon from '@/icons/smartphone/Icon_b.png';
import Styles from './Navbar.module.css';

const Navbar = () => {
    return(
      <div id={Styles.navbar}>
          <img src={logo} alt="fireup.pro - power to change IT" id={Styles.logo} />
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
          <img src={img_tablet_icon} alt="Open menu" id={Styles.navbarIconTablet}/>
          <img src={img_phone_icon} alt="Open menu" id={Styles.navbarIconPhone}/>
      </div>
    );
}

export default Navbar;