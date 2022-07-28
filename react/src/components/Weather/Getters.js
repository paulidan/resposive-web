const getSunriseTime = (data) =>
  new Date(data.sys.sunrise * 1000).toLocaleTimeString("pl-IN");

const getDate = (data) =>
  format(new Date(), dateFormatPurposueDescription.date, {
    locale: pl,
  });

const getTemp = (data) =>
  data.main.temp.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

const getFeelsLike = (data) =>
  data.main.feels_like.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

const getSunsetTime = (data) =>
  new Date(data.sys.sunset * 1000).toLocaleTimeString("pl-IN");

const getHumidity = (data) => data.main.humidity;

const getPressure = (data) => data.main.pressure;

const getWindSpeed = (data) =>
  (data.wind.speed * 3.6).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

const getClouds = (data) => data.clouds.all;

const getAqi = (data) => data.aqi;

export {
  getSunriseTime,
  getDate,
  getAqi,
  getClouds,
  getFeelsLike,
  getHumidity,
  getPressure,
  getSunsetTime,
  getTemp,
  getWindSpeed
};
