import { useState, useEffect } from 'react'
import countrySerivice from '/src/services/countries'
import WeatherInfo from './Weather'

const Item = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>   
  )
}

const Languages = ({ languages}) => {
  const showLanguages = Object.entries(languages).map(([key, value]) => {
    return (
      <li key={key}>
        {value}
      </li>
    );
  });
  
  return (
    <>
    <div>
        <b>languages:</b> 
    </div>
    <ul >
        {showLanguages}
    </ul> 
    </>
  )
}


const Country = ({ name }) => {

    const [country, setCountry] = useState() 

    useEffect(() => {
        countrySerivice
          .getByName(name)
          .then(country => {
            setCountry(country)
          })
      }, [])

    const margin = {
      marginBottom: '20px',
    }
    const imageStyle= {
      width: 'auto',
      height: 150
    }

    if (country){
  
      return (
        <div>
          <h1>
              {country.name.common}
          </h1>
          <div style={margin}>
            <Item text = "area" value = {country.area}/>
            <Item text = "capital" value = {country.capital}/>
          </div>
          <Languages languages = {country.languages} />         
          <img src={country.flags.png} alt={country.flags.alt} style = {imageStyle}/>
          <WeatherInfo latlng={country.capitalInfo.latlng} capital={country.capital}/>
        </div>
    )
  }
}
  
  export default Country