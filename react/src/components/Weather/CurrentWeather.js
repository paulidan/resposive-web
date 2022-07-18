import React from 'react';
import CurrentStyle from './CurrentW.module.css';
import sun from '../../icons/desktop/weathersun.png';
import rain from '../../icons/desktop/weatherrain.png';
import cloud from '../../icons/desktop/weathercloud.png';
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

const CurrentWeather = ({ data }) => {
    return (
        <div className={CurrentStyle.app}>
            <div>
                <div className={CurrentStyle.location_box}>
                    <div className={CurrentStyle.location}>{data.city}</div>
                    <div className={CurrentStyle.date}>{format(new Date(), dateFormatPurposueDescription.date, { locale: pl })}</div>
                </div>
                <div className={CurrentStyle.weather_box}>
                    <div className={CurrentStyle.temp}> {Math.round(data.main.temp)}°C
                        <div className={CurrentStyle.feels}>
                            feels like: {Math.round(data.main.feels_like)}°C
                        </div>
                        <div className={CurrentStyle.weather}>
                            {data.weather[0].main} <img src={icons[data.weather[0].main]} />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default CurrentWeather;