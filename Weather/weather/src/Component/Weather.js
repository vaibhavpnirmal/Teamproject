import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

const apikey='02d294325ffbf5c381ba1b1f5703dc47'
const url="api.openweathermap.org/data/2.5/weather?q=Londen&units=Metric&appid=02d294325ffbf5c381ba1b1f5703dc47"

const Weather = (props) => {
  const {cityname,temp,handlechange,fetchdata,humididity,speed}=props
 
  
  return (
    <div className='container'>

<div className='search-bar'> 
<input type='text' name='search' onChange={handlechange} onClick={()=>{}}></input>
<FaSearch id="qq" onClick={()=>{
  {fetchdata()
  }
}}></FaSearch>
</div>
<div className='image'>
<FaCloudSun id="qq" />

</div>

<div className='text'>

<p>{temp? temp:'enter correct name'}&deg;</p>
    <h3>{cityname}</h3>
</div>

<div className='icons'>
    <div className='humidity'>
 <WiHumidity id="qq"></WiHumidity>
 <h1>{humididity}% Humidity</h1>

    </div>
    <div className='wind'>
        <FaWind id="qq"></FaWind>
   <h1>{speed}kmph wind</h1> 
    
    </div>
   
    

</div>



       

      
    </div>
  )
}

export default Weather
