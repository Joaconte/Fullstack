const Filter = ({ filter, setFilter, setSelectedCountry}) => {

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  return (
    <div className="input">
      find countries <input onChange = {handleFilterChange} value = {filter}/>
    </div>
  )
}

export default Filter