import React from 'react'

const Person = ({ name, number, handleDelete }) => {
  return (
    <div>
      <li className='person'>{name} {number} <button onClick={handleDelete}>Delete</button></li>
    </div>
  )
}

export default Person