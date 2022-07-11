import HeaderStyle from "./Header.module.css";
import layer_7 from '../icons/desktop/Layer_7.png';
import layer_11 from '../icons/desktop/Layer_11.png';
import layer_8 from '../icons/desktop/Layer_8.png';
import layer_12 from '../icons/desktop/Layer_12.png';
import layer_9 from '../icons/desktop/Layer_9.png';
import layer_10 from '../icons/desktop/Layer_10.png';
import logo from '../icons/desktop/Logo.png';
import layer_29 from '../icons/desktop/Layer_29_copy.png';
import layer_37 from '../icons/desktop/Layer_37.png';

function Header(){
    return(
      <div id={HeaderStyle.header}> 
        <div className={HeaderStyle.background}>
          <img src={layer_37} alt="background pic" />
          <div id={HeaderStyle.heading}>
            <h1> Feel the Power of Typography</h1>
          </div>
          <div className={HeaderStyle.boxes}>
            <div className={HeaderStyle.red_boxes}>
              <img src={layer_7} alt="typo box" />
              <img src={layer_11} alt="Typography" />
            </div>
            <div className={HeaderStyle.blue_boxes}>
              <img src={layer_8} alt="resp box" />
              <img src={layer_12} alt="Responsive" />
            </div>
            <div className={HeaderStyle.green_boxes}>
              <img src={layer_9} alt="ux box" />
              <img src={layer_10} alt="UX" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header