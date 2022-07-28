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
import {
    DisplayPressure,
    DisplayClouds,
    DisplayFeelTemp,
    DisplayWind,
    DisplayTemp,
    DisplayData,
    DisplayHumidity,
} from "../APIValidation";


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
    if (!data) return null;

    return (
        <>
            <div className={ForecastStyle.title}>Pogoda długoterminowa</div>
            <Accordion allowZeroExpanded className={ForecastStyle.container}>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton className={ForecastStyle.wrapper}>
                                <div className={ForecastStyle.daily_item}>
                                    <div className={ForecastStyle.weather}>
                                        <img src={ICONS[item.weather[0].main]} />
                                    </div>
                                    <div className={ForecastStyle.day}>{forecastDays[idx]}</div>
                                    <div className={ForecastStyle.min_max}>
                                    <DisplayTemp 
                                        temp={item.main.temp.toLocaleString(undefined, {
                                            maximumFractionDigits: 0,
                                        })}
                                    />
                                    °C  
                                    </div>                              
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={ForecastStyle.wrapper}>
                            <div className={ForecastStyle.daily_details_grid}>
                                <span className={ForecastStyle.daily_details_grid_item}>
                                    Ciśnienie:{" "}
                                    <DisplayPressure pressure={item.main.pressure} /> hPa
                                </span>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Wilgotność:{" "}
                                    <DisplayHumidity humidity={item.main.humidity} /> %
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Zachmurzenie: <DisplayData clouds={item.clouds.all} /> %{" "}
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Wiatr:{" "}
                                    <DisplayData
                                        wind={(item.wind.speed * 3.6).toLocaleString(undefined, {
                                            maximumFractionDigits: 0,
                                        })}
                                    />{" "}
                                    KM/h
                                </div>
                                <div className={ForecastStyle.daily_details_grid_item}>
                                    Odczuwalna temp:{" "}
                                    <DisplayFeelTemp
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