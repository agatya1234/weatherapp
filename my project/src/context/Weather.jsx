import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForlocation } from "../api";
export const WeatherContext = createContext(null);
/* to read the context*/
export const useWeather = () => {
  return useContext(WeatherContext);
};
export const WeatherProvider = (props) => {
    console.log("hii",props)
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  /* when we click on it then we get data */
  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    /* then all the response in setdata after this all components get render after this */
    setData(response);
  };
  /*this help in getting user lat and lon */
  const fetchCurrentUserLocationData = () => {
    navigator.geolaction.getCurrentPositon((position) => {
      getWeatherDataForlocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.childern}
    </WeatherContext.Provider>
  );
};
