import React from 'react'

import Person from '../components/Person'

const Persons = ({persons}) => {
    console.log(persons)
    
    return (
        <ul>
            {persons.map((person) => <Person key={person.id} name={person.name} number={person.number}/>)}
        </ul>
    )
}

export default Persons