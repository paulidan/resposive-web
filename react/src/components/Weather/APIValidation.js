import React from "react";

const DisplayFeelTemp = ({ feelTemp }) => {
  return !!feelTemp ? <span>{feelTemp}</span> : <>N/A</>;
};

const DisplayHumidity = ({ humidity }) => {
  return !!humidity ? <span>{humidity}</span> : <>N/A</>;
};


const DisplayData = ({ data }) => <span>{!!data ? data : 'N/A'}</span>

const DisplayPressure = ({ pressure }) => {
  return !!pressure ? <span>{pressure}</span> : <>N/A</>;
};

const DisplayClouds = ({ clouds }) => {
  return !!clouds ? <span>{clouds}</span> : <>N/A</>;
};

const DisplayWind = ({ wind }) => {
  return !!wind ? <span>{wind}</span> : <>N/A</>;
};

const DisplaySunrise = ({ sunrise }) => {
  return !!sunrise ? <span>{sunrise}</span> : <>N/A</>;
};
const DisplaySunset = ({ sunset }) => {
  return !!sunset ? <span>{sunset}</span> : <>N/A</>;
};

const DisplayTemp = ({ temp }) => {
  return !!temp ? <span>{temp}</span> : <>N/A</>;
};

export {
  DisplayTemp,
  DisplaySunset,
  DisplaySunrise,
  DisplayWind,
  DisplayData,
  DisplayClouds,
  DisplayPressure,
  DisplayFeelTemp,
  DisplayHumidity,
};
