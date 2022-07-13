import React, { useState } from 'react';
import CurrentStyle from './CurrentW.module.css';
import SearchStyle from './Search.module.css';
import sun from '../../icons/desktop/weathersun.png';
import rain from '../../icons/desktop/weatherrain.png';
import cloud from '../../icons/desktop/weathercloud.png';
import { weatherApi } from './Api';
// import Search from './Search';


function CurrentWeather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    // const handleOnSearchChange = (searchData) => {
    //     const [lat, lon] = searchData.value.split(" ");

    //     const searching = fetch(
    //         fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
    //             .then(res => res.json())
    //     )
            const Search = evt => {
                console.log(evt);
                if(evt.code === 'Enter'){
                    fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
                    .then(res => res.json())
                    .then(result => {
                        setWeather(result);
                        setQuery('');
                        console.log(result);
                    });
                }

            }
    //         .catch(console.log);
    // }

    const icons = {
        'Clear': sun,
        'Rain': rain,
        'Clouds': cloud
    };


    const dateBuilder = (d) => {
        // let months= ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // let days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // let day = days[d.getDay()];
        // let date = d.getDate();
        // let month = months[d.getMonth()];
        // let year = d.getFullYear();

        // return `${day} ${date} ${month} ${year}`
        return `${d.toLocaleString()}`
    }

    return (
        <div className={CurrentStyle.app}>
            <main>
                <div className={SearchStyle.search_box}>
                    <input 
                    type='text'
                    className={SearchStyle.search_bar}
                    placeholder='Search...'
                    onChange={e => setQuery (e.target.value)}
                    value= {query}
                    onKeyPress={Search}
                    />
                    {/* <Search onSearchChange={handleOnSearchChange} /> */}
                </div>
                {(typeof weather.main != 'undefined') ? (
                    <div>
                        <div className={CurrentStyle.location_box}>
                            <div className={CurrentStyle.location}>{weather.name}, {weather.sys.country}</div>
                            <div className={CurrentStyle.date}>{dateBuilder(new Date())}</div>
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