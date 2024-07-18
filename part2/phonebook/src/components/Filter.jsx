const Filter = ({ filter, setFilter }) => {

  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div>
      filter shown with <input onChange = {handleFilterChange} value = {filter}/>
    </div>
  )
}

export default Filter