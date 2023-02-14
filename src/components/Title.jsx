import React from 'react'

function Title({title}) {
  return (
    <div>
        <h3>{!title ? "Login": title}</h3>
    </div>
  )
}

export default Title