import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import ForecastStyle from './Forecast.module.css';
import sun from '../../../icons/desktop/weathersun.png';
import rain from '../../../icons/desktop/weatherrain.png';
import cloud from '../../../icons/desktop/weathercloud.png';

const ICONS = {
    'Clear': sun,
    'Rain': rain,
    'Clouds': cloud
};

const WEEK_DAYS = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    console.log("data", data)
    if(!data) return null;

    return (
        <>
            <label className={ForecastStyle.title}>Pogoda długoterminowa</label>
            <Accordion allowZeroExpanded className={ForecastStyle.container}>
                {data?.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton className={ForecastStyle.wrapper}>                           
                                <li className={ForecastStyle.daily_item}>
                                    <div className={ForecastStyle.weather}>
                                        <img src={ICONS[item.weather[0].main]} />
                                    </div>
                                    <label className={ForecastStyle.day}>{forecastDays[idx]}</label>
                                    <label className={ForecastStyle.min_max}>{Math.round(item.main.temp)}°C</label>
                                </li>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={ForecastStyle.wrapper}>
                            <div className={ForecastStyle.daily_details_grid}>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
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