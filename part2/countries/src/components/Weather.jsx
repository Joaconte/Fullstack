import { useState, useEffect } from 'react'
import weatherService from '/src/services/weather'


const WeatherIcon = ({id}) => {

    const imageStyle= {
        width: 'auto',
        height: 150
      }

    const baseUrl = 'https://openweathermap.org/img/wn/'
    const urlSuffix = '@2x.png'
    return (
        <>
        <img src={baseUrl+id+urlSuffix} style = {imageStyle}/>
        </>
    )
}


const WeatherInfo = ({latlng, capital}) => {

  const [weather, setWeather] = useState(null) 

  useEffect(() => {
      weatherService
        .get(latlng[0], latlng[1])
        .then(weather => {
          setWeather(weather)
        })
    }, [])

    if (weather){
    const temperature =  Math.round((weather.main.temp - 273.15)*100)/100
      return (
        <>
        <h1>
          Weather in {capital}
        </h1>  
        <div>
          temperature {temperature}º celcius
        </div>  
        <WeatherIcon id = {weather.weather[0].icon}/>
        <div>
          wind {weather.wind.speed} m/s
        </div>   
        </>
      )
    }
  }

  export default WeatherInfo