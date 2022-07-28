import { NavLink, Link } from 'react-router-dom';
import Styles from './Navbar.module.css';

const MainNav = () => {
  
  return(
    <>
        <li className={Styles.navItem} active="true">
            <NavLink className={Styles.navLink} to="/">HOME</NavLink>
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
    </>
  );
}

export default MainNav;