import React from 'react'
import './main.css'



const Main = ({setCity,getWeather,weather,isActive,reset}) => {
  return (
    <div className='main'>
        <div className='inputs'>
            <input type="text" placeholder='Введите город' onChange={(e) => setCity(e.target.value)}/>
            <input type="button" value="Узнать погоду" onClick={getWeather}/>
            <input type="button" value="Сбросить" onClick={reset}/>
        </div>
        <div className='country'>
          {isActive ? weather.location.country : null}
        </div>
        <div className='temp'>
          {isActive ? weather.current.temp_c : null}
        </div>
        <div className='wind'>
        {isActive ? weather.current.wind_kph : null}
        </div>
        <div className='pressure'>
        {isActive ? weather.current.pressure_in : null}
        </div>
    </div>
  )
}

export default Main