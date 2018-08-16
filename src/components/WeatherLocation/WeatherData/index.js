import React from "react";

import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

import { SNOW } from "../../../constants/weathers";

import './styles.css';

const WeatherData = () => (
  <div className='weather-data-cont'>
    <WeatherTemperature weatherState={SNOW} temperature={27} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

export default WeatherData;

