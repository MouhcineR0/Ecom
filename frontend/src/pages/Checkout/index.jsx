import { Input } from 'antd';
import React from 'react';

function index() {
    return (
        <div className='container mx-auto my-6'>
            <h1 className='font-inter font-medium text-[36px]'>Billing Details</h1>
            <div className="flex mt-4">
                <div className="left-side">
                    <div className="container-1 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            First Name<Required />
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-2 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Company Name
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-3 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Street Address<Required />
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-4 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Apartment, floor, etc. (optional)
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-5 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Town/City<Required />
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-6 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Phone Number<Required />
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                    <div className="container-7 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Email Address<Required />
                        </label>
                        <Input className='py-2 w-[400px] font-inter' />
                    </div>
                </div>
                <div className="right-side flex flex-col">

                </div>
            </div>
        </div>
    );
}

function Required() {
    return (
        <p className='text-red-700'>
            *
        </p>
    );
}

export default index;