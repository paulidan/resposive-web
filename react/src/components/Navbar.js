import logo from '@/icons/desktop/Logo.png';
import phone_logo from '@/icons/smartphone/Logo.png';
import img_tablet_icon from '@/icons/tablet/Icon_cb.png';
import img_phone_icon from '@/icons/smartphone/Icon_b.png';
import Styles from './Navbar.module.css';
import MainNav from './MainNav';

const Navbar = (props) => {
  
  return(
    <div id={Styles.navbar}>
        <img src={logo} alt="fireup.pro - power to change IT" id={Styles.logoRegular} />
        <img src={phone_logo} alt="fireup.pro - power to change IT" id={Styles.logoPhone} />
        <ul id={props.showSidebar ? Styles.sidebarOn : Styles.sidebarOff}>
          <MainNav/>
        </ul>
        <ul id={Styles.mainNav}>
          <MainNav/>
        </ul>
        <img src={img_tablet_icon} alt="Open menu" id={Styles.navbarIconTablet} onClick={props.toggleSidebar}/>
        <img src={img_phone_icon} alt="Open menu" id={Styles.navbarIconPhone} onClick={props.toggleSidebar}/>
    </div>
  );
}

export default Navbar;