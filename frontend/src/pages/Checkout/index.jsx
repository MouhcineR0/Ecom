import { Input, Radio } from 'antd';
import React from 'react';
import PaiementImg from '../../assets/imgs/paiement.png';
import Button from '../../components/utils/Button';

function index({ Products, TotalPrice, Shipping, handleCheckout }) {

    return (
        <div className='container mx-auto my-6'>
            <h1 className='font-inter text-primary underline cursor-pointer mb-4' onClick={handleCheckout}>/ Back To Card Page</h1>
            <h1 className='font-inter font-medium lg:text-[36px] md:text-[32px] text-[29px]'>Billing Details :</h1>
            <div className="flex mt-4 justify-between flex-col md:flex-row items-center">
                <div className="left-side w-[70%] md:[35%] lg:w-[45%]">
                    <div className="container-1 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            First Name<Required />
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-2 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Company Name
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-3 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Street Address<Required />
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-4 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Apartment, floor, etc. (optional)
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-5 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Town/City<Required />
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-6 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Phone Number<Required />
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                    <div className="container-7 flex flex-col mb-2">
                        <label htmlFor="" className='flex text-[16px] text-gray-600'>
                            Email Address<Required />
                        </label>
                        <Input className='py-2 lg:w-[400px] md:w-[350px] w-[300px] font-inter' />
                    </div>
                </div>
                <div className="right-side flex flex-col w-[100%] md:w-[65%] lg:w-[50%] items-center">
                    <div className="display-product flex-col w-[90%] p-4">
                        {
                            Products.map((ele, ind) => {
                                return (
                                    <div className="flex items-center w-full gap-3 justify-between h-[40px] text-[16px]">
                                        <div className="flex items-center justify-between gap-2">
                                            <img src={ele.img} className='w-[45px]' alt="" />
                                            <h1>{ele.title}</h1>
                                        </div>
                                        <p>$ {ele.price}</p>
                                    </div>
                                );
                            })
                        }
                        <div className="under-products mt-5">
                            <div className="flex justify-between border-b-[1px] border-b-gray-300 py-4">
                                <h1>Subtotal</h1>
                                <h2>${TotalPrice}</h2>
                            </div>
                            <div className="flex justify-between border-b-[1px] border-b-gray-300 py-4">
                                <h1>Shipping</h1>
                                <h2>{Shipping ? `$${Shipping}` : '$0'}</h2>
                            </div>
                            <div className="flex justify-between py-4">
                                <h1>Total</h1>
                                <h2>${TotalPrice}</h2>
                            </div>
                            <div className="flex justify-between py-4">
                                <h1 className='flex items-center'>
                                    <Radio disabled />
                                    <h2>Bank</h2>
                                </h1>
                                <img src={PaiementImg} />
                            </div>
                            <div className="flex justify-between py-4">
                                <h1 className='flex items-center'>
                                    <Radio checked />
                                    <h2>Cash on delivery</h2>
                                </h1>
                            </div>
                            <Button Name={'Place Order'} type={'submit'} />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

function Required() {
    return (
        <p className='text-red-700'>
            *
        </p>
    );
}

// function SingleProduct(Prod) {
//     return (
//         Prod.map((ele, ind) => {
//             <div className="single-product">

//             </div>;
//         })
//     );
// }

export default index;