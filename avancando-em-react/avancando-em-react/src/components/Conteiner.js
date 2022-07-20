import React from 'react'

const Conteiner = ({children}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
    </div>
  )
}

export default Conteiner