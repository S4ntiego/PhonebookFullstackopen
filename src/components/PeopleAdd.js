import React from 'react'

const PeopleAdd = ({handleNameChange, handleNumberChange, newName, newNumber, submitName}) => {
console.log('xD')

return (
<div>
    <form onSubmit={submitName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <button type="submit">add</button>
    </form>
</div>
      )
}

export default PeopleAdd