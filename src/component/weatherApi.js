import Image from "./img/images";
import {toast} from 'react-hot-toast'

const apiKey = 'c2044f11bf2a6ce36d00ef98261d92d8'

const weatherIcon = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherDataApi = async(city, units = 'metric', setBg) => {
  
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    const fetchData = await fetch(urlApi)
    .then(res => res.json())
    .then(data => data)
 
  
 
    const {weather, main:{feels_like, humidity, pressure, temp, temp_max, temp_min}, name, sys: {country}, wind: {speed} } = fetchData;

    


const{description, icon} = weather[0]

const changeBg = () => {
    if(description.includes("clouds" || "باد")) {
      setBg(`${Image[0]}`);
    } else if (description.includes("rain" || "بارانی")) {
      setBg(`${Image[1]}`);
    } else if (description.includes("snow" || "برفی")) {
      setBg(`${Image[2]}`);
    } else if (description.includes("mist" || "مه")) {
      setBg(`${Image[3]}`);
    } else if (description.includes("sunny" || "آفتابی")) {
        setBg(`${Image[4]}`);
      } else if (description.includes("clear" || "صاف" )) {
      setBg(`${Image[5]}`);
    }
     else {
      setBg(`${Image[0]}`);
    }
  }

 changeBg()
   

  return {
  
    feels_like, humidity, pressure, temp, temp_min, temp_max, description, iconURL : weatherIcon(icon), name, country, speed,


 };


};



export default getWeatherDataApi