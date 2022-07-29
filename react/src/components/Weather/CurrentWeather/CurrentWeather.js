import React from "react";

import { DisplayData } from "../DataDisplay";
import {
  getSunriseTime,
  getDate,
  getAqi,
  getClouds,
  getFeelsLike,
  getHumidity,
  getPressure,
  getSunsetTime,
  getTemp,
  getWindSpeed,
} from "../getters";
import CurrentStyle from "./CurrentW.module.css";
import sun from "../../../icons/desktop/weathersun.png";
import rain from "../../../icons/desktop/weatherrain.png";
import cloud from "../../../icons/desktop/weathercloud.png";

const ICONS = {
  Clear: sun,
  Rain: rain,
  Clouds: cloud,
};


const CurrentWeather = ({ data }) => {
  if (!data) {
    return <>N/A</>;
  }

  return (
    <div className={CurrentStyle.app}>
      <div className={CurrentStyle.weather_side}>
        <div className={CurrentStyle.weather_gradient}>
          <div className={CurrentStyle.location_box}>
            <i className={CurrentStyle.location_icon}></i>
            <span className={CurrentStyle.location}>
              <DisplayData data={data.name} />
            </span>
            <span className={CurrentStyle.date}>
              <DisplayData data ={getDate(data)} />
            </span>
          </div>
        </div>
        <div className={CurrentStyle.weather_box}>
          <div className={CurrentStyle.temp}>
            <div className={CurrentStyle.weather_description}>
              {data.weather[0].main}{" "}
            </div>
            <div className={CurrentStyle.weather_temp}>
              <DisplayData data={getTemp(data)} />
              °C
            </div>
            <img
              className={CurrentStyle.weather_icon}
              src={ICONS[data.weather[0].main]}
            />
          </div>
        </div>
      </div>
      <div className={CurrentStyle.feels_info}>
        <div className={CurrentStyle.feels_info_container}>
          <div className={CurrentStyle.feels}>
            <div className={CurrentStyle.feels_temp}>
              <div className={CurrentStyle.title}>Odczuwalna temperatura:</div>
              <DisplayData data={getFeelsLike(data)} /> °C
            </div>
            <div className={CurrentStyle.sunrise}>
              <div className={CurrentStyle.title}>Wschód słońca:</div>
              <DisplayData data={getSunriseTime(data)} />
            </div>
            <div className={CurrentStyle.sunset}>
              <div className={CurrentStyle.title}>Zachód słońca:</div>
              <DisplayData data={getSunsetTime(data)} />
            </div>
            <div className={CurrentStyle.humidity}>
              <div className={CurrentStyle.title}>Wilgotność powietrza:</div>
              <DisplayData data={getHumidity(data)} /> %
            </div>
            <div className={CurrentStyle.pressure}>
              <div className={CurrentStyle.title}>Ciśnienie atmosferyczne:</div>
              <DisplayData data={getPressure(data)} /> hPa
            </div>
            <div className={CurrentStyle.wind}>
              <div className={CurrentStyle.title}>Prędkość wiatru:</div>
              <DisplayData data={getWindSpeed(data)} /> KM/h
            </div>
            <div className={CurrentStyle.clouds}>
              <div className={CurrentStyle.title}>Zachmurzenie:</div>
              <DisplayData data={getClouds(data)} /> %{" "}
            </div>
            <div className={CurrentStyle.aqi}>
              <div className={CurrentStyle.title}>Smog:</div>
              <DisplayData data={getAqi(data)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
