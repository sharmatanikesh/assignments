import React from 'react'


function Todo({title,description}) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Todo
