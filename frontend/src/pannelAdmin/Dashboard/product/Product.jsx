import React, { useRef, useState } from 'react'
import { Button } from 'antd';
import AddPro from './AddPro';
import CardPro from './CardPro';

function Product() {
    
    return (
        <div className='w-full h-[100vh] bg-gray-100'>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Gestionne des Produits :</h1>
            <span className='w-full flex justify-end'>
                <AddPro/>
            </span>
            <CardPro/>

        </div>
    )
}

export default Product