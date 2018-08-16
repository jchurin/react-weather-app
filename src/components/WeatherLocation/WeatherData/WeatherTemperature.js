import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from 'prop-types';
import { 
    CLOUD, 
    CLOUDY, 
    SUN, 
    RAIN, 
    SNOW, 
    WINDY 
} from '../../../constants/weathers';
import './styles.css';

const _stateToIconName = weatherState => {
  let iconName = "";
  switch (weatherState) {
    case CLOUD:
      iconName = "cloud";
      break;
    case CLOUDY:
      iconName = "cloudy";
      break;
    case SUN:
      iconName = "day-sunny";
      break;
    case RAIN:
      iconName = "rain";
      break;
    case SNOW:
      iconName = "snow";
      break;
    case WINDY:
      iconName = "windy";
      break;
    default:
      iconName = "day-sunny";
      break;
  }
  return iconName;
};

const _getWeatherIcon = weatherState => {
  return <WeatherIcons name={_stateToIconName(weatherState)} size={"2x"} />;
};

const WeatherTemperature = ({ temperature = 0, weatherState }) => (
  <div className='weather-temperature-cont'>
    {_getWeatherIcon(weatherState)}
    <span>{`${temperature}° C`}</span> 
  </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;
