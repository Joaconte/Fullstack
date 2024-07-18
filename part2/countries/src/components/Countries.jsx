import Country from "./Country"

const ShowInfoButton = ({ name, setSelectedCountry}) => {
  return (
    <button onClick={() => setSelectedCountry(name)} >show</button>
  )
}

const CountriesList = ({filteredCountries, setSelectedCountry}) =>{
  const gap = {
    display: 'flex',
    gap: '5px',
  }

  return (
    <div>
    {filteredCountries.map( country => (
        <div key={country.cca2} style={gap}>
          {country.name.common}
          <ShowInfoButton name = {country.name.common} setSelectedCountry = {setSelectedCountry }/>
        </div>
      ))}
    </div>
  )
}


const Countries = ({ countries, filter, selectedCountry, setSelectedCountry}) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
    if (selectedCountry)
    return (
      <Country name = {selectedCountry}/>
    )
    else if (filteredCountries.length > 10)
        return(
          <>
            Too many matches, specify another filter
          </>
        )
    else if (filteredCountries.length > 1)
    return (
      <CountriesList filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry}/>
    )
    else if (filteredCountries.length == 1) {
      const name = filteredCountries[0].name.common
      return (
        <Country name = {name}/>
      )
    }
    else return (
      <>
        No matches
      </>
    )
  }

export default Countries