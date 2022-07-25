import React from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import {
  DisplayPressure,
  DisplayClouds,
  DisplayFeelTemp,
  DisplayWind,
  DisplayTemp,
  DisplayData,
  DisplayHumidity,
  DisplaySunrise,
  DisplaySunset,
} from "../APIValidation";
import CurrentStyle from "./CurrentW.module.css";
import sun from "../../../icons/desktop/weathersun.png";
import rain from "../../../icons/desktop/weatherrain.png";
import cloud from "../../../icons/desktop/weathercloud.png";

const ICONS = {
    'Clear': sun,
    'Rain': rain,
    'Clouds': cloud
};
const dateFormatPurposueDescription = {
  date: "cccc, dd/MM/yy, h:mm",
};
const DisplayCity = ({ city }) => {
  return !!city ? (
    <div className={CurrentStyle.location}>{city}</div>
  ) : (
    <>N/A</>
  );
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
              <DisplayCity city={data.name} />
            </span>
            <span className={CurrentStyle.date}>
              {format(new Date(), dateFormatPurposueDescription.date, {
                locale: pl,
              })}
            </span>
          </div>
        </div>
        <div className={CurrentStyle.weather_box}>
          <div className={CurrentStyle.temp}>
            <div className={CurrentStyle.weather_description}>
              {data.weather[0].main}{" "}
            </div>
            <div className={CurrentStyle.weather_temp}>
              <DisplayTemp
                temp={data.main.temp.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              />
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
              <span className={CurrentStyle.title}>
                Odczuwalna temperatura:{" "}
                <DisplayFeelTemp
                  feelTemp={data.main.feels_like.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                />
                °C
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.sunrise}>
              <span className={CurrentStyle.title}>
                Wschód słońca:{" "}
                <DisplaySunrise
                  sunrise={new Date(data.sys.sunrise * 1000).toLocaleTimeString(
                    "pl-IN"
                  )}
                />
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.sunset}>
              <span className={CurrentStyle.title}>
                Zachód słońca:{" "}
                <DisplaySunset
                  sunset={new Date(data.sys.sunset * 1000).toLocaleTimeString(
                    "pl-IN"
                  )}
                />
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.humidity}>
              <span className={CurrentStyle.title}>
                Wilgotność powietrza:{" "}
                <DisplayHumidity humidity={data.main.humidity} /> %
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.pressure}>
              <span className={CurrentStyle.title}>
                Ciśnienie atmosferyczne:{" "}
                <DisplayPressure pressure={data.main.pressure} /> hPa
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.wind}>
              <span className={CurrentStyle.title}>
                Prędkość wiatru:{" "}
                <DisplayData
                 data={(data.wind.speed * 3.6).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                />{" "}
                KM/h
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.clouds}>
              <span className={CurrentStyle.title}>
                Zachmurzenie: <DisplayData data={data.clouds.all} /> %{" "}
              </span>
              <br></br>
            </div>
            <div className={CurrentStyle.aqi}>
              <span className={CurrentStyle.title}>
                Smog: <DisplayData data={data.aqi} />
              </span>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      {
        //  </div><div className={CurrentStyle.weather}>
      }
    </div>
  );
};

export default CurrentWeather;
