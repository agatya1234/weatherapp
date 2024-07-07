import React, { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    if (searchCity) {
      const weatherData = await getWeatherDataForCity(searchCity);
      setData(weatherData);
    }
  };

  const fetchCurrentUserLocationData = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await getWeatherDataForLocation(latitude, longitude);
        setData(weatherData);
      });
    }
  };

  return (
    <WeatherContext.Provider value={{ data, searchCity, setSearchCity, fetchData, fetchCurrentUserLocationData }}>
      {children}
    </WeatherContext.Provider>
  );
};
