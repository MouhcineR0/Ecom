import React from 'react'
import TableCommand from './TableCommand'

function Command() {
  return (
    <div className='w-full h-[100vh] bg-gray-100'>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Gestionne des Commandes :</h1>
            <TableCommand/>
    </div>
  )
}

export default Command