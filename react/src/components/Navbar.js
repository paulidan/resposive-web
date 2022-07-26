import { Link } from 'react-router-dom';
import logo from '@/icons/desktop/Logo.png';
import Styles from './Navbar.module.css';

const Navbar = () => {
    return(
      <div id={Styles.navbar}>
          <img src={logo} alt="logo" id={Styles.logo} />
          <ul id={Styles.mainNav}>
            <li className={Styles.navLink} active>
              <Link className={Styles.navItem} to="/">HOME</Link>
            </li>
            <li className={Styles.navLink}>
              <Link className={Styles.navItem} to="/menu2">MENU 2</Link>
            </li>
            <li className={Styles.navLink}>
              <Link className={Styles.navItem} to="/menu3">MENU 3</Link>
            </li>
            <li className={Styles.navLink }>
              <Link className={Styles.navItem} to="/pogoda">POGODA</Link>
            </li>
          </ul>
      </div>
    );
}

export default Navbar;