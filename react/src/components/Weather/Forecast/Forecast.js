import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { DisplayData } from '../DataDisplay';
import { getWind } from "../getters";
import ForecastStyle from './Forecast.module.css';
import sun from '../../../icons/desktop/weathersun.png';
import rain from '../../../icons/desktop/weatherrain.png';
import cloud from '../../../icons/desktop/weathercloud.png';


const ICONS = {
    "Clear": sun,
    "Rain": rain,
    "Clouds": cloud
};

const WEEK_DAYS = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    console.log("data", data)
    if (!data) return null;

    return (
        <>
            <div className={ForecastStyle.title}>Pogoda długoterminowa</div>
            <Accordion allowZeroExpanded className={ForecastStyle.container}>
                {data.list.splice(0, 6).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton className={ForecastStyle.wrapper}>                           
                                <li className={ForecastStyle.daily_item}>
                                    <div className={ForecastStyle.weather}>
                                        <img src={ICONS[item.weather[0].main]} />
                                    </div>
                                    <div className={ForecastStyle.day}>{forecastDays[idx]}</div>
                                    <div className={ForecastStyle.min_max}>
                                    <DisplayData 
                                        temp={item.main.temp.toLocaleString(undefined, {
                                            maximumFractionDigits: 0,
                                        })}
                                    />
                                    °C  
                                    </div>                              
                                </li>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={ForecastStyle.wrapper}>
                            <div className={ForecastStyle.daily_details_grid}>
                                <span className={ForecastStyle.daily_details_grid_item}>
                                    Ciśnienie:{" "}
                                    <DisplayData pressure={item.main.pressure} /> hPa
                                </span>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Wilgotność:{" "}
                                    <DisplayData humidity={item.main.humidity} /> %
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Zachmurzenie: <DisplayData clouds={item.clouds.all} /> %{" "}
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Wiatr:{" "}
                                    <DisplayData
                                        wind={getWind(item)}
                                    />{" "}
                                    KM/h
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Odczuwalna temp:{" "}
                                    <DisplayData
                                        feelTemp={item.main.feels_like.toLocaleString(undefined, {
                                            maximumFractionDigits: 0,
                                        })}
                                    />
                                    °C
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>

    );
};

export default Forecast;