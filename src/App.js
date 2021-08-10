import React, { useState, useEffect } from 'react'

import Persons from '../src/components/Persons'
import PeopleAdd from '../src/components/PeopleAdd'
import contactsService from '../src/services/contacts'

const App = () => {
  useEffect(() => {
    contactsService.getAll()
    .then(initialContacts =>
      setPersons(initialContacts)
    )
  }, [])

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personsFilter, setPersonsFilter ] = useState('')

  const personsNames = persons.map((person) => { return person.name })

  const handleFilterChange = (event) => {
    setPersonsFilter(event.target.value)
    console.log(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonDelete = (id) => {
    if (window.confirm("Do you really want to delete that user boi?")){
    contactsService.personDelete(id)
    .then(setPersons(persons.filter(person => person.id !== id)))
    }
  }  

  const submitName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName,
      date: new Date().toISOString(),
      number: newNumber,
    }

    const person = persons.find(person => person.id === personObject.id)
    const changedPerson = { ...person, number: personObject.number }

    if (personsNames.includes(newName)){
      if (window.confirm("Such user already exists in our database, do you want to replace the old number with a new one?")){
        contactsService.numberUpdate(personObject.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personObject.id ? person : returnedPerson)
        )})
      }
    } else {
    contactsService.create(personObject)
    .then((returnedNote) => 
      setPersons(persons.concat(returnedNote)))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow =
    personsFilter === ''
    ? persons
    : persons.filter((person) => person.name.includes(personsFilter))

  return (
    <div>
      <h2>Phonebook</h2>
          filter shown with <input value={personsFilter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PeopleAdd newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} submitName={submitName}/>
      <h2>Numbers</h2>
      <ul>
      <Persons persons={personsToShow} handlePersonDelete={handlePersonDelete}/>
      </ul>
      </div>
  )
}

export default App