import React from 'react'

import Person from '../components/Person'
import contactsService from '../services/contacts'

const Persons = ({persons, handlePersonDelete}) => {

    return (
        <ul>
            {persons.map((person) => <Person key={person.id} name={person.name} number={person.number} handleDelete={() => handlePersonDelete(person.id)}/>)}
        </ul>
    )
}

export default Persons