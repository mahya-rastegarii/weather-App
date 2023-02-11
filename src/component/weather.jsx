

const Weather = ({weather, units}) => {
    
    return ( 
      
            <div className="flex justify-between tems-center bg-bgColor  rounded-md px-3 py-4 lg:px-5 lg:py-9  md:w-2/4">
            <div className="flex flex-col items-center justify-center mr-20  text-white space-y-3">
             <span className=" md:text-lg ">{`${weather.name} , ${weather.country}`}</span>
             <img src={`${weather.iconURL}`} className='w-12 md:w-28' alt="weather icon" />
             <span className=" md:text-lg ">{`${weather.description}`}</span>
            </div>
            <div className="flex justify-center items-center font-bold text-4xl md:text-5xl  text-white">
              <h1 className="">{`${weather.temp.toFixed()} ° ${units === 'metric' ? 'C' : 'F'}`}</h1>
            </div>  
          </div>

     );
}
 
export default Weather;