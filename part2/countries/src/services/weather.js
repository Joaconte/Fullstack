import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  
  const get = (lat, lon) => {
    const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_APPID}`)
    return request.then(response => response.data)
  }

export default { get }
