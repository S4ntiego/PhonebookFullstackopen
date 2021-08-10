import React from 'react'

const Person = ({ name, number, handleDelete }) => {
  return (
    <div>
    <li>{name} {number} <button onClick={handleDelete}>Delete</button></li>
    </div>
  )
}

export default Person