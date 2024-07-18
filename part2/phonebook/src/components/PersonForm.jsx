import { useState } from 'react'
import personService from '/src/services/persons'


const PersonForm = ({ persons, setPersons, messageSetter}) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    if (person){
      if (confirm(`${newName} is already added to phonebook, replace the old number with the new one`)){
        const changedPerson = { ...person, number: newNumber}
        const id = person.id

        personService
          .update(id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            messageSetter(`${newName}'s number changed`, false)
          })
          .catch(() => {
            messageSetter(`Information of ${newName} has already been removed from the server`, true)
          })
      }
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
        
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          messageSetter(`Added ${newName}`, false)
        })
    }
  }
  

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
    
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange = {handleNameChange} value = {newName}/>
        </div>
        <div>
          number: <input onChange = {handleNumberChange} value = {newNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson} >add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm