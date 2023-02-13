const Input = ({setUnits, setCity}) => {

    const enterKeyPress = (e) => {
        if(e.keyCode === 13) {
            setCity(e.currentTarget.value)

            e.currentTarget.blur()
        }
    }
    const handlerButtonClick = (e) => {
    
        const button = e.currentTarget;
        const btnValue = button.innerText.slice(1)

        const isCelsius = btnValue === 'C';
        button.innerText = isCelsius ? '°F' : '°C';
        setUnits(isCelsius ? 'metric' : 'imperial');
    }
    return (  
     <div className="flex justify-between w-full px-3 py-5 md:w-2/4 bg-bgColor my-3  rounded-md">
         <input type="text" className=" text-white px-2 py-1 md:placeholder:font-semibold md:placeholder:text-lg rounded-md bg-transparent mr-3 lg:w-2/4  border-slate-100  outline-none border " placeholder="Enter City ..." onKeyDown={enterKeyPress} />
          <button className="bg-white md:w-32  w-20 px-3 md:px-6 rounded-md py-1 md:py-3 font-semibold text-lg outline-none border-0" onClick={(e) => {handlerButtonClick(e)}}> °F</button>
     </div> );
}
 
export default Input;