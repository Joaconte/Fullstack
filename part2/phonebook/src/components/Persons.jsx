import Person from "./Person"
import personService from '/src/services/persons'

const Persons = ({ persons, filter, setPersons}) => {

    const deletePerson = (id) => {
      
      const deletePerson = persons.find(person => person.id === id)
      if (confirm(`Delete ${deletePerson.name} ?`)){
        personService
        .deleteById(id)
        .then(() =>{
            setPersons(persons.filter(person => person.id != id))
        })
      }
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
      {personsToShow.map( person => 
        <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)}/>
        )}
      </div>
    )
  }

export default Persons