import React, { useState } from 'react';
import CurrentStyle from './CurrentW.module.css';
import sun from '../../icons/desktop/weathersun.png';
import rain from '../../icons/desktop/weatherrain.png';
import cloud from '../../icons/desktop/weathercloud.png';
import { weatherApi } from './Api';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale'

function CurrentWeather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const Search = evt => {
        console.log(evt);
        if (evt.code === 'Enter') {
            fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }

    }

    const icons = {
        'Clear': sun,
        'Rain': rain,
        'Clouds': cloud
    };

    return (
        <div className={CurrentStyle.app}>
            <main>
                {weather.main ? (
                    <div>
                        <div className={CurrentStyle.location_box}>
                            <div className={CurrentStyle.location}>{weather.name}, {weather.sys.country}</div>
                            <div className={CurrentStyle.date}>{format(new Date(), 'cccc, dd/MM/yy, h:mm', { locale: pl })}</div>
                        </div>
                        <div className={CurrentStyle.weather_box}>
                            <div className={CurrentStyle.temp}>
                                {Math.round(weather.main.temp)}°C
                                <div className={CurrentStyle.feels}>
                                    feels like {Math.round(weather.main.feels_like)}°C
                                </div>
                                <div className={CurrentStyle.weather}>
                                    {weather.weather[0].main} <img src={icons[weather.weather[0].main]} />
                                </div>
                            </div>

                        </div>
                    </div>

                ) : ('')}
            </main>
        </div>
    );
}

export default CurrentWeather;