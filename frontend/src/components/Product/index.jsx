import React from 'react';
import testImg from '../../assets/imgs/product.png';
import { IoIosHeartEmpty } from "react-icons/io";
import { SlEye } from "react-icons/sl";




function index() {

    const IconsStyle = 'bg-white hover:bg-red-500 hover:text-white text-[30px] rounded-full cursor-pointer p-1';

    return (
        <div className='single-product flex flex-col gap-2'>
            <div className="image-container bg-[#F5F5F5] p-7 rounded relative">
                <img src={testImg} alt="product" />
                <div className="offre bg-primary absolute top-1 left-1 px-3 py-1 rounded-md text-white text-[11px]">-40%</div>
                <div className='flex flex-col absolute top-1 right-1 gap-1'>
                    <div>
                        <IoIosHeartEmpty className={IconsStyle} />
                    </div>
                    <div>
                        <SlEye className={IconsStyle} />
                    </div>
                </div>
            </div>
            <div className="description-container">
                <div className="title font-poppins font-medium">
                    HAVIT HV-G92 Gamepad
                </div>
                <div className='flex gap-3'>
                    <div className="price-offre text-primary font-semibold">
                        $120
                    </div>
                    <div className="old-price text-gray-500">
                        <del>$160</del>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default index;