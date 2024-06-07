import { Input } from 'antd';
import React from 'react';
import Button from '../utils/Button';

function UnderTable({ Total, showCheckout }) {

    const handleSubmit = () => {

    };

    return (
        <div className='mx-auto w-full container flex my-8 font-poppins justify-between flex-col md:flex-row items-center md:items-start gap-5 md:gap-0'>
            <form action="" onSubmit={handleSubmit} className='flex items-stretch Coupon w-[90%] md:w-[40%] h-[50px] gap-3'>
                <Input placeholder='Coupon Code' className='px-5 rounded-md w-[60%] border-1 border-gray-700 focus:border-primary hover:border-primary' />
                <Button type={'submit'} Name={'Apply'} className={'w-[40%] md:w-[70%] pt-0 pb-0'} />
            </form>
            <div className="Cart-total flex flex-col border-[1.5px] border-black p-5 rounded-md md:w-[40%] w-[70%]">
                <h1 className='font-medium text-[20px] py-2'>Cart Total</h1>
                <div className="flex justify-between w-full border-b-2 border-gray-400 text-[16px] py-3">
                    <p className=''>Subtotal</p>
                    <h3>$ {Total}</h3>
                </div>
                <div className="flex justify-between w-full border-b-2 border-gray-400 text-[16px] py-3">
                    <p className=''>Shipping</p>
                    <h3>Free</h3>
                </div>
                <div className="flex justify-between w-full text-[16px] py-3">
                    <p className=''>Total</p>
                    <h3>$ {Total}</h3>
                </div>
                <Button Name={'Process to checkout'} className={'text-center self-center mt-2'} onClick={showCheckout} />
            </div>
        </div >
    );
}

export default UnderTable;