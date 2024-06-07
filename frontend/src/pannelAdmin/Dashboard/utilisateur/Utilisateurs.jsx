import React from 'react'
import AddUser from './AddUser'
import CardUser from './CardUser'

function Utilisateurs() {
    return (
        <div className='w-full h-[100vh] bg-gray-100'>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Gestionne des Utilisateurs :</h1>
            <span className='w-full flex justify-end'>
                <AddUser/> 
            </span>
            <CardUser/>
        </div>
    )
}

export default Utilisateurs