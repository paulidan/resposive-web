import Header from "./Header.module.css";

function Header(){
    return(
        <div className={Header.background}>
          <img src={layer_37} alt="background pic" />
          <div id="heading">
            <h1> Feel the Power of Typography</h1>
          </div>
          <div className={Header.boxes}>
            <div className={Header.red_boxes}>
              <img src={layer_7} alt="typo box" />
              <img src={layer_11} alt="Typography" />
            </div>
            <div className={Header.blue_boxes}>
              <img src={layer_8} alt="resp box" />
              <img src={layer_12} alt="Responsive" />
            </div>
            <div className={Header.green_boxes}>
              <img src={layer_9} alt="ux box" />
              <img src={layer_10} alt="UX" />
            </div>
          </div>
        </div>
    );
}

export default Header