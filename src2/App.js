
import './App.css';
import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useState } from 'react';

function App() {
  const API_KEY = '317147e078c54d6c882102156230710'
  const [city, setCity] = useState('')
  const [weather,setWeather] = useState({})
  const [isActive, setIsActive] = useState(false) 
  const getWeather = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    const data = await response.json()
    console.log(data);
    setWeather(data)
    setIsActive(true)
  }
  const reset = () => {
    isActive = false
    getWeather = null
    city = ''
    weather = ''
  }




  return (
    <div className="App">
      <Header/>
      <Main
      setCity={setCity}
      getWeather={getWeather}
      weather={weather}
      isActive={isActive}
      reset={reset}/>
      <Footer/>
    </div>
  );
}

export default App;
