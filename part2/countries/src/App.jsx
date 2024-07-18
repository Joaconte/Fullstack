import { useState, useEffect } from 'react'
import countrySerivice from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countrySerivice
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  return (
    <div>
      <Filter filter = {filter} setFilter={setFilter} setSelectedCountry={setSelectedCountry} />
      <Countries countries = {countries} filter={filter} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
    </div>
  )
}

export default App