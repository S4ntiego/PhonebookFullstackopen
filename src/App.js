import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Persons from '../src/components/Persons'
import PeopleAdd from '../src/components/PeopleAdd'



const App = () => {
  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response =>
      setPersons(response.data)
    )
  }, [])

  const [persons, setPersons] = useState([])
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

  const submitName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName,
      date: new Date().toISOString(),
      number: newNumber,
    }

    if (personsNames.includes(newName)){
      return window.alert('Jebać Disa')
    } else {
    setPersons(persons.concat(personObject))
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
      <Persons persons={personsToShow}/>
      </ul>
      </div>
  )
}

export default App