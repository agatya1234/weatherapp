const baseURL="http://api.weatherapi.com/v1/current.json?key=b7ce41deff584ab082d74703240407";

 export const getWeatherDataForCity=async(city) =>{
    const response= await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
 };
 

 export const getWeatherDataForlocation=async(lat,lon) =>{
    const response= await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
 };
