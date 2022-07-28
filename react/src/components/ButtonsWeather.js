import ButtonsWeatherStyle from "./ButtonsWeather.module.css";
import React from 'react';
import { Link } from "react-router-dom";

const ButtonsWeather = () => {
    return (
        <div className={ButtonsWeatherStyle.ButtonsMenu}>
            <Link to={"/pogoda/szukaj"}>
                <button className={ButtonsWeatherStyle.Buttons}>Szukaj pogody</button>
            </Link>
            <Link to={"/pogoda/dzis"}>
                <button className={ButtonsWeatherStyle.Buttons}>Pogoda na dziś</button>
            </Link>
            <Link to={"/pogoda/term"}>
                <button className={ButtonsWeatherStyle.Buttons}>Pogoda długoterminowa</button>
            </Link>
        </div>
    );
}

export default ButtonsWeather;