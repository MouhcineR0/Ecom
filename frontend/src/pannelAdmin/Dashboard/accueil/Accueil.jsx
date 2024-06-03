// Accueil.jsx
import React from 'react';
import './style.css'
import Messages from './Messages';
import Alerts from './Alerts';

function Accueil() {
  return (
    <div className='w-full h-[100vh]'>
      <div className='p-6 w-full bg-white rounded-md font-poppins text-white'>
      <div className='w-11/12 m-auto flex justify-between'>
        <div className='p-3 bg-[#DB4444] cursor-pointer rounded-md w-[200px] transition duration-300 ease-in-out hover:bg-white hover:text-primary hover:outline-dashed outline-2 '>
          <div className='flex items-center justify-between'>
            <span>Revenue:</span>
          </div>
          <div className='font-bold my-2 text-center text-3xl'>$299</div>
        </div>
        <div className='p-3 bg-[#DB4444] cursor-pointer rounded-md w-[200px] transition duration-300 ease-in-out hover:bg-white hover:text-primary  hover:outline-dashed outline-2'>
          <div className='flex items-center justify-between'>
            <span>Produits:</span>
          </div>
          <div className='font-bold my-2 text-center text-3xl'>44</div>
        </div>
        <div className='p-3 bg-[#DB4444] cursor-pointer rounded-md w-[200px] transition duration-300 ease-in-out hover:bg-white hover:text-primary  hover:outline-dashed outline-2'>
          <div className='flex items-center justify-between'>
            <span>Commandes:</span>
          </div>
          <div className='font-bold my-2 text-center text-3xl'>7</div>
        </div>
        <div className='p-3 bg-[#DB4444] cursor-pointer rounded-md w-[200px] transition duration-300 ease-in-out hover:bg-white hover:text-primary  hover:outline-dashed outline-2'>
          <div className='flex items-center justify-between'>
            <span>Utilisateurs:</span>
          </div>
          <div className='font-bold my-2 text-center text-3xl'>9</div>
        </div>
      </div>
    </div>
    <div className=' w-full flex gap-9 mt-6'>
    <Messages/>
    <Alerts/>
    </div>
    </div>
  );
}

export default Accueil;
