import React from 'react';
import CurrentStyle from './CurrentW.module.css';
import sun from '../../icons/desktop/weathersun.png';
import rain from '../../icons/desktop/weatherrain.png';
import cloud from '../../icons/desktop/weathercloud.png';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale'
import { DisplayPressure,
DisplayClouds,
DisplayFeelTemp,
DisplayWind,
DisplayTemp,
DisplaySmog, 
DisplayHumidity,
DisplaySunrise,
DisplaySunset, } from './APIValidation'
import { render } from 'react-dom';

const icons = {
    'Clear': sun,
    'Rain': rain,
    'Clouds': cloud
};
const DisplayCity = ({city}) => {
    return (!!city) ?
         ( <div className={CurrentStyle.location}>{city}</div> ) :
         (<>N/A</>)
}
const CurrentWeather = ({ data }) => {
    console.log("ala1", data)
    if (! data ) {
        return (<>N/A</>)
    }
    return (
        <div className={CurrentStyle.app}>
            <div>
                <div className={CurrentStyle.location_box}>
                    <DisplayCity city={data.name} />
                    <div className={CurrentStyle.date}>{format(new Date(), 'cccc, dd/MM/yy, h:mm', { locale: pl })}</div>
                </div>
                <div className={CurrentStyle.weather_box}>
                    <div className={CurrentStyle.temp}>
                        <DisplayTemp temp={data.main.temp.toLocaleString(undefined,{maximumFractionDigits:0})} />°C
                        <div className={CurrentStyle.feels}>
                            <p>Odczuwalna temperatura: <DisplayFeelTemp feelTemp={(data.main.feels_like).toLocaleString(undefined,{maximumFractionDigits:0})}/>°C</p> 
                            <p>Wschód słońca: <DisplaySunrise sunrise={new Date(data.sys.sunrise * 1000).toLocaleTimeString('pl-IN')} /></p>
                            <p>Zachód słońca: <DisplaySunset sunset={new Date(data.sys.sunset * 1000).toLocaleTimeString('pl-IN')} /></p>
                            <p>Wilgotność powietrza: <DisplayHumidity humidity={data.main.humidity} /> %</p>
                            <p>Ciśnienie atmosferyczne: <DisplayPressure pressure = {data.main.pressure} /> hPa</p>
                            <p>Prędkość wiatru: <DisplayWind wind={(data.wind.speed * 3.6).toLocaleString(undefined,{maximumFractionDigits:0})} /> KM/h</p>
                            <p>Zachmurzenie: <DisplayClouds clouds={data.clouds.all} /> % </p>
                            <p>Smog: <DisplaySmog smog={data.aqi} /></p>
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