import React, { useState } from 'react';
import testImg from '../../assets/imgs/product.png';
import { IoIosHeartEmpty } from "react-icons/io";
import { SlEye } from "react-icons/sl";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import useWidth from '../../tools/useWidth';




function index({ id, title, price, oldPrice, rating, ratingCount, img, offerPercentage, Loved }) {
    const [MouseOver, setMouseOver] = useState(false);

    const Width = useWidth();

    const MouseEnter = () => {
        setMouseOver(true);
    };

    const MouseLeave = () => {
        setMouseOver(false);
    };

    const IconsStyle = 'bg-white hover:bg-red-500 hover:text-white text-[30px] rounded-full cursor-pointer p-1 product-icon';
    const LovedIconStyle = 'bg-red-500 text-white hover:bg-white hover:text-black text-[30px] rounded-full cursor-pointer p-1 product-icon';

    return (
        <>
            <div className='w-[250px] overflow-hidden' onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} key={id}>
                <div className='single-product flex flex-col gap-2 p-2'>
                    <div className="image-container bg-[#F5F5F5] rounded relative">
                        <img src={img} alt="product" className='p-7' />
                        {offerPercentage && <div className="offre bg-primary absolute top-1 left-1 px-3 py-1 rounded-md text-white text-[11px]">-{offerPercentage}%</div>}
                        <div className='flex flex-col absolute top-1 right-1 gap-1'>
                            <div>
                                {Loved ? <IoIosHeartEmpty className={LovedIconStyle} /> : <IoIosHeartEmpty className={IconsStyle} />}
                            </div>
                            <div>
                                <SlEye className={IconsStyle} />
                            </div>
                        </div>
                        <Link className={`bg-black flex w-full font-poppins text-white justify-center py-2 rounded-b-md z-[-1] ${MouseOver || Width < 769 ? 'translate-y-[0]' : 'translate-y-[50px]'}`}>
                            Add To Cart
                        </Link>
                    </div>
                    <div className="description-container flex flex-col gap-1 z-10 bg-white">
                        <div className="title font-poppins font-medium">
                            {title}
                        </div>
                        <div className='flex gap-3'>
                            <div className="price-offre text-primary font-semibold">
                                ${price}
                            </div>
                            <div className="old-price text-gray-500">
                                <del>${oldPrice}</del>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Rating name="half-rating-read" defaultValue={rating} precision={0.1} size='30' readOnly className='' />
                            <p className='text-[14px] text-center text-gray-500'>({ratingCount})</p>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}

export default index;