import HeaderStyle from "./Header.module.css";
import layer_7_c from '../icons/desktop/Layer_7_c.png';
import layer_11_c from '../icons/desktop/Layer_11_c.png';
import layer_8_cr from '../icons/desktop/Layer_8_cr.png';
import layer_12_cq from '../icons/desktop/Layer_12_cq.png';
import layer_9 from '../icons/desktop/Layer_9.png';
import layer_10 from '../icons/desktop/Layer_10.png';
import layer_37 from '../icons/desktop/Layer_37.png';

function Header(){
    return(
      <div id={HeaderStyle.background}>
        <div id={HeaderStyle.heading}>
          <p>Feel the Power of Typography</p>
        </div>
        <div id={HeaderStyle.boxes}>
          <div className={HeaderStyle.red_boxes}>
            <img src={layer_7_c} alt="typo box" />
            <img src={layer_11_c} alt="Typography" />
          </div>
          <div className={HeaderStyle.blue_boxes}>
            <img src={layer_8_cr} alt="resp box" />
            <img src={layer_12_cq} alt="Responsive" />
          </div>
          <div className={HeaderStyle.green_boxes}>
            <img src={layer_9} alt="ux box" />
            <img src={layer_10} alt="UX" />
          </div>
        </div>
      </div>
    );
}

export default Header