import React from 'react';
import Customer from '../../../assets/icons/services/customer.png';
import Delivery from '../../../assets/icons/services/delivery.png';
import Secure from '../../../assets/icons/services/secure.png';

function index() {

    const Services = [
        {
            img: Customer,
            title: 'FREE AND FAST DELIVERY',
            text: 'Free delivery for all orders over $140'
        },
        {
            img: Delivery,
            title: '24/7 CUSTOMER SERVICE',
            text: 'Friendly 24/7 customer support'
        },
        {
            img: Secure,
            title: 'MONEY BACK GUARANTEE',
            text: 'We reurn money within 30 days'
        }
    ];

    return (
        <div className="container w-full mx-auto flex justify-evenly items-center flex-wrap">
            {
                Services.map((ele, ind) => {
                    return (
                        <div className="flex flex-col items-center justify-evenly select-none mb-5">
                            <div className="svg-container bg-gray-500 rounded-full p-2 mb-3 hover:scale-105">
                                <div className="inside-svg-containe bg-black rounded-full flex items-center justify-center p-1">
                                    <img src={ele.img} alt="" width={30} />
                                </div>
                            </div>
                            <div className="service-title font-semibold uppercase text-[20px]">
                                {ele.title}
                            </div>
                            <div className="service-text uppercase text-[14px]">
                                {ele.text}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default index;