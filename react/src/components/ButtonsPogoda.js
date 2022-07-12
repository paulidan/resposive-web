import ButtonsPogodaStyle from "./ButtonsPogoda.module.css";
import React, {components} from 'react';


function ButtonsPogoda()  {
    return(
        
        
        <div className={ButtonsPogodaStyle.ButtonsMenu}>
            
            <button className={ButtonsPogodaStyle.Buttons}>Szukaj pogody</button>
            <button className={ButtonsPogodaStyle.Buttons}>
                <span className={ButtonsPogodaStyle.Buttonstext}>Pogoda na dziś</span>
            </button>
            <button className={ButtonsPogodaStyle.Buttons}>
                <span className={ButtonsPogodaStyle.Buttonstext}>Pogoda Dlugoterminowa</span>
            </button>
        </div>
       
        

    );
}
export default ButtonsPogoda;