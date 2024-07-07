/*we it get mounted then we want to ask use current location for that we will use useeffect hook*/
import { useEffect } from "react";
import Card from "./components/card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

import "./App.css";
function App() {
  const weather = useWeather();
  console.log(weather);

 
  /*call that function which is created in weather.jsx and this will show to allow to take current loaction*/
   useEffect(()=>{
    weather.fetchCurrentUserLocationData()
    
  },[]);
  
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={weather.fetchCurrentUserLocationData} value="Refresh" />
    </div>
  );
}

export default App;
