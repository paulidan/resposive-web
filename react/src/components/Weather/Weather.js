import React from 'react';
import Pogoda from'./Pogoda_na_dzis.module.css';
import moment from 'moment';
import 'moment-timezone';
import { Card } from 'semantic-ui-react';

          
export default function Weather({weatherData}) {
return (
    <Card>
        <Card.Content>
            <Card.Header className={Pogoda.header}>City Name: {weatherData.name}</Card.Header>
            <p>Temprature: {weatherData.main.temp}</p>
            <p>Sunrise: {weatherData.sys.sunrise}</p>
            <p>Sunset: {weatherData.sys.sunset}</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </Card.Content>
      </Card>
    )
}