import ButtonsPogodaStyle from "./ButtonsPogoda.module.css";
import React, {components} from 'react';
import { Link } from "react-router-dom";

function ButtonsPogoda()  {
    return(
        <div className={ButtonsPogodaStyle.ButtonsMenu}>
            <Link to={"/pogoda/szukaj"}>
                <button className={ButtonsPogodaStyle.Buttons}>Szukaj pogody</button>
            </Link>
            <Link to={"/pogoda/dzis"}>
                <button className={ButtonsPogodaStyle.Buttons}> Pogoda na dziś</button>
            </Link>
            <Link to={"/pogoda/term"}>
                <button className={ButtonsPogodaStyle.Buttons}>Pogoda długoterminowa</button>
            </Link>
        </div>
    );
}
export default ButtonsPogoda;