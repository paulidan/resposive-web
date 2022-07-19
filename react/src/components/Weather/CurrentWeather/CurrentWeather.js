import React from 'react';
import CurrentStyle from './CurrentW.module.css';
import sun from '../../../icons/desktop/weathersun.png';
import rain from '../../../icons/desktop/weatherrain.png';
import cloud from '../../../icons/desktop/weathercloud.png';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale'

const icons = {
    'Clear': sun,
    'Rain': rain,
    'Clouds': cloud
};

const dateFormatPurposueDescription = {
    date: 'cccc, dd/MM/yy, h:mm'
};

const DisplayCity = ({ city }) => {
    return (!!city) ?
        (<div className={CurrentStyle.location}>{city}</div>) :
        (<></>)
}

const CurrentWeather = ({ data }) => {
    console.log("ala1", data)
    if (!data) {
        return (<></>)
    }

    return (
        <div className={CurrentStyle.app}>
            <div>
                <div className={CurrentStyle.location_box}>
                    <DisplayCity city={data.name} />
                    <div className={CurrentStyle.date}>{format(new Date(), dateFormatPurposueDescription.date, { locale: pl })}</div>
                </div>
                <div className={CurrentStyle.weather_box}>
                    <div className={CurrentStyle.temp}>
                        {data.main.temp.toLocaleString(undefined, { maximumFractionDigits: 0 })} °C
                        <div className={CurrentStyle.feels}>
                            <p>Odczuwalna temperatura: {Math.round(data.main.feels_like)}°C</p>
                            <p>Wschód słońca: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('pl-IN')}</p>
                            <p>Zachód słońca: {new Date(data.sys.sunset * 1000).toLocaleTimeString('pl-IN')}</p>
                            <p>Wilgotność powietrza: {data.main.humidity} %</p>
                            <p>Ciśnienie atmosferyczne: {data.main.pressure} hPa</p>
                            <p>Prędkość wiatru: {(data.wind.speed * 3.6).toLocaleString(undefined, { maximumFractionDigits: 0 })} KM/h</p>
                            <p>Zachmurzenie: {data.clouds.all} % </p>
                            <p>Smog: </p>
                        </div>
                        <div className={CurrentStyle.weather}>
                            {data.weather[0].main} <img src={icons[data.weather[0].main]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;