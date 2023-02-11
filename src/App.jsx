import Image from "./component/img/images";
import Input from "./component/input";
import Weather from "./component/weather";
import Description from "./component/description";
import { useEffect, useState } from "react";
import getWeatherDataApi from "./component/weatherApi";


const App = () => {


  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState('tehran') 
  const [units, setUnits] = useState('metric')
  const [bg, setBg] = useState(`${Image[0]}`)



 
  useEffect(()=> {

      const fetchWeatherData = async() => {
       
      
        const data = await getWeatherDataApi(city, units, setBg);
        setWeather(data)
     
       }
       fetchWeatherData();
   
         
  }, [units, city]);

  
  return ( 
    
  
      <div className=" h-100vh bg-center w-full bg-no-repeat capitalize bg-cover flex flex-col items-center justify-evenly space-y-5 overflow-hidden" style={{backgroundImage:`url(${bg})` }}>
   
       <Input setUnits={setUnits} setCity={setCity}/>
      
        {

          weather && (
           <>
           <Weather weather={weather} units={units}/>
          <Description weather={weather} units={units}/>
          </>
          )
        }
   
    </div>
   

     
  );
}
 
export default App;
