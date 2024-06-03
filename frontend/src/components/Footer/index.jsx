import React from 'react';
import Send from '../../assets/icons/send.png';
import { Link } from 'react-router-dom';

function index() {

    const UnderTitle = 'font-medium text-[20px] text-white';
    const NormalLinks = 'text-[#cacaca] text-[16px]';

    return (
        <div className='mx-auto w-full bg-black text-white'>
            <div className="inside-footer flex p-9 justify-between gap-4 flex-wrap container mx-auto">
                <div className="Exclusive">
                    <h1 className='font-bold text-2xl mb-2'>PrimeShop</h1>
                    <div className="email-containe relative">
                        <h1 className={`${UnderTitle} mb-4`}>Subscribe</h1>
                        <p className={`${NormalLinks} mb-4`}>Get 10% off your first order</p>
                        <input type="email" name="" id="" placeholder='Enter your email' className='bg-black border border-white rounded-sm p-2 outline-none' />
                        <img src={Send} alt="" className='absolute top-[95px] right-[10px] cursor-pointer' />
                    </div>
                </div>
                <div className={`Support flex flex-col ${NormalLinks}`}>
                    <h1 className={UnderTitle}>Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className={`Account flex flex-col ${NormalLinks}`}>
                    <Link className={UnderTitle}>My Account</Link>
                    <Link>Login / Register</Link>
                    <Link>Cart</Link>
                    <Link>Wishlist</Link>
                    <Link>Shop</Link>
                </div>
                <div className={`quick flex flex-col ${NormalLinks}`}>
                    <Link className={UnderTitle}>Privacy Policy</Link>
                    <Link>Terms Of Use</Link>
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                </div>
            </div>
            <div className="copyright border-t-[1px] border-gray-800 text-gray-700 text-center p-2">
                &copy; Copyright Rimel 2022. All right reserved
            </div>
        </div >
    );
}

export default index;