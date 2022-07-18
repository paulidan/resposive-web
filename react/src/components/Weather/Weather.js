import React from 'react';
import Pogoda from'./Pogoda_na_dzis.module.css';
import { Card, Button } from 'semantic-ui-react';
import moment from 'moment-timezone';
import { pl } from 'date-fns/locale';
import sun from '../../icons/desktop/weathersun.png';
import rain from '../../icons/desktop/weatherrain.png';
import cloud from '../../icons/desktop/weathercloud.png';

export default function Weather({weatherData}) {

//Timer, current time and update the seconds in real-time
//    const [dt, setDt] = useState(new Date().toLocaleString());
//        useEffect(() => {
//            let secTimer = setInterval( () => {
//               setDt(new Date().toLocaleString())
//            },1000)
//        return () => clearInterval(secTimer);
//        }, []);
        
//refresh button
const weather = useSta[{}];
const icons = {
    'Clear': sun,
    'Rain': rain,
    'Clouds': cloud
};
    const refresh = () => {
        window.location.reload();
    }

 
//output

    return (
    <Card>
        <Card.Content>
            <div className={Pogoda.container}>
                <Card.Header className={Pogoda.header}> {weatherData.name} </Card.Header>
                {weather.weather[0].main} <img src={icons[weather.weather[0].main]} />
            <div className={Pogoda.temperatura}>
                Temperatura: {weatherData.main.temp.toLocaleString(undefined,{maximumFractionDigits:0})} °C
            </div>
            <p>Data: {moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p>Wschód słońca: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('pl-IN')}</p>
            <p>Zachód słońca: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('pl-IN')}</p>
            <p>Wilgotność: {weatherData.main.humidity} %</p>
            <p>Ciśnienie: {weatherData.main.pressure} hPa</p>
            <p>Prędkość wiatru: {(weatherData.wind.speed * 3.6).toLocaleString(undefined,{maximumFractionDigits:0})} KM/h</p>
            <p>Zachmurzenie: {weatherData.clouds.all} %</p>
            <p>Opis: {weatherData.weather[0].description}</p>
            <br></br>
            <p>Odśwież stronę!</p>
            <Button className={Pogoda.button} inverted color='blue' circular icon='refresh' onClick={refresh}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </Button>
                </div>
        </Card.Content>
      </Card>
    )
}