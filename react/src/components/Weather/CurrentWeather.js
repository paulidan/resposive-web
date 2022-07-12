import React, { useState } from 'react';
import CurrentStyle from './CurrentW.module.css';

const api = {
    key: 'fd54d9727b22aa867dc1f33db65eaafc',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function CurrentWeather(){

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const Search = evt => {
        console.log(evt);
        if(evt.code === 'Enter'){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }

    }

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

    return(
        <div className={CurrentStyle.app}>
            <main>
                <div className={CurrentStyle.search_box}>
                    <input 
                    type='text'
                    className={CurrentStyle.search_bar}
                    placeholder='Search...'
                    onChange={e => setQuery (e.target.value)}
                    value= {query}
                    onKeyPress={Search}
                    />
                </div>
                {(typeof weather.main != 'undefined')?(
                    <div>
                        <div className={CurrentStyle.location_box}>
                            <div className={CurrentStyle.location}>{weather.name}</div>
                                <div className={CurrentStyle.date}>{dateBuilder(new Date())}</div>
                                </div>
                                <div className={CurrentStyle.weather_box}>
                                    <div className={CurrentStyle.temp}>
                                        {Math.round(weather.main.temp)}°C
                                    </div>
                                     <div className={CurrentStyle.weather}>Sunny</div>
                                </div> 
                        </div>
                    
                ) : ('') }
            </main>
        </div>
    );
}
export default CurrentWeather;