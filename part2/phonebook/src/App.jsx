import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  function messageSetter(message, isError){
    setError(isError)
    setMessage(
      message
    )
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={error} />
      <Filter filter = {filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm persons = {persons} setPersons = {setPersons} messageSetter={messageSetter}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} setPersons = {setPersons} filter = {filter} />
    </div>
  )
}

export default App