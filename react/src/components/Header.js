import layer_7_c from '@/icons/desktop/Layer_7_c.png';
import { useState } from 'react';
import layer_11_c from '@/icons/desktop/Layer_11_c.png';
import layer_8_c from '@/icons/desktop/Layer_8_c.png';
import layer_12 from '@/icons/desktop/Layer_12.png';
import layer_9_cp from '@/icons/desktop/Layer_9_cp.png';
import layer_10_co from '@/icons/desktop/Layer_10_co.png';
import Navbar from '@/components/Navbar';
import Styles from "./Header.module.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

    return(
      <div id={showSidebar ? Styles.mainBoxShrunk : Styles.mainBox}>
        <div id={Styles.container}>
          <p id={Styles.heading}>Feel the Power of Typography</p>
          <div id={Styles.boxes}>
            <div id={Styles.redBoxes}>
              <img src={layer_7_c} alt="typo box" className={Styles.iconBox} />
              <img src={layer_11_c} alt="Typography" className={Styles.textBox} />
            </div>
            <div id={Styles.blueBoxes}>
              <img src={layer_8_c} alt="resp box" className={Styles.iconBox} />
              <img src={layer_12} alt="Responsive" className={Styles.textBox} />
            </div>
            <div id={Styles.greenBoxes}>
              <img src={layer_9_cp} alt="ux box" className={Styles.iconBox} />
              <img src={layer_10_co} alt="UX" className={Styles.textBox} />
            </div>
          </div>
        </div>
        <Navbar toggleSidebar={handleShowSidebar} showSidebar={showSidebar}/>
      </div>
    </div>
  );
}

export default Header;