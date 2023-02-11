import {FaArrowDown, FaArrowUp, FaRegSmile, FaWind} from 'react-icons/fa'
import {MdOutlineCompress, MdOutlineWaterDrop} from 'react-icons/md'

const Description = ({weather, units}) => {

    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "m/s" : "m/h";

    const cards = [
        {
          id: 1,
          icon: <FaArrowDown />,
          title: "min",
          data: weather.temp_min.toFixed(),
          unit: tempUnit,
        },
        {
          id: 2,
          icon: <FaArrowUp />,
          title: "max",
          data: weather.temp_max.toFixed(),
          unit: tempUnit,
        },
        {
          id: 3,
          icon: <FaRegSmile />,
          title: "feels like",
          data: weather.feels_like.toFixed(),
          unit: tempUnit,
        },
        {
          id: 4,
          icon: <MdOutlineCompress />,
          title: "pressure",
          data: weather.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: weather.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FaWind />,
          title: "wind speed",
          data: weather.speed.toFixed(),
          unit: windUnit,
        },
      ];

    return (

            (
                <div className="grid md:grid-cols-3  grid-cols-2 gap-2  md:gap-4 px-2 content-center md:w-2/4 text-white">
                    {
                        cards.map(({id, icon, title, data, unit}) => (

                   <div  className=" flex flex-col items-center justify-center p-1 sm:p-2 md:p-[10px] lg:p-4 mx-5 md:mx-0  bg-bgColor rounded-md" key={id}>
                 <div className="flex items-center space-x-1">
                  {icon}
                   <span className=" text-sm ">{title}</span>
             
                 </div>
                 <span className="font-bold md:text-lg lg:text-xl ">{`${data} ${unit}`}</span>
                </div>
                        ))
                    }
          
          </div> 
            )
    
  );
}
 
export default Description;