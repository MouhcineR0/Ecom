import React, { useState } from 'react';
import testImg from '../../assets/imgs/product.png';
import { IoIosHeartEmpty } from "react-icons/io";
import { SlEye } from "react-icons/sl";
import Rating from "@mui/material/Rating";
import Stack from '@mui/material/Stack';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useWidth from '../../hooks/useWidth';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { AddCard } from '../../features/Product/ProductFunctions';
import { message } from 'antd';




function index({ id, title, price, oldPrice, rating, ratingCount, img, offerPercentage, Loved }) {


    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const [MouseOver, setMouseOver] = useState(false);

    // for image popup
    const [open, setopen] = useState(false);

    const Width = useWidth();

    const [isLoved, setisLoved] = useState(Loved);

    const MouseEnter = () => {
        setMouseOver(true);
    };

    const MouseLeave = () => {
        setMouseOver(false);
    };

    const IconsStyle = 'bg-white hover:bg-red-500 hover:text-white text-[30px] rounded-full cursor-pointer p-1 product-icon';
    const LovedIconStyle = 'bg-red-500 text-white hover:bg-white hover:text-black text-[30px] rounded-full cursor-pointer p-1 product-icon';
    // 200 : 180
    // const Loved = false;

    const LoveClick = (id) => {
        let LovedItems = localStorage.getItem("LovedItems");
        if (LovedItems && LovedItems.length)
            LovedItems += ';' + id;
        else
            LovedItems = id;
        localStorage.setItem("LovedItems", LovedItems);
        setisLoved(true);
    }

    const LoveCancled = (id) => {
        let LovedItems = localStorage.getItem("LovedItems")?.split(';');
        LovedItems = LovedItems.filter((ele) => (ele != id && ele.length));
        console.log(LovedItems);
        let LovedItemsString = "";
        LovedItems.map((ele) => LovedItemsString += ele + ';');
        localStorage.setItem("LovedItems", LovedItemsString);
        setisLoved(false);
    }

    // user
    const { isAuth } = useSelector(state => state.user);
    const navigate = useNavigate();
    const handleAddCard = async () => {
        if (!isAuth) {
            window.location.href = '/login';
            return;
        }
        try {
            await dispatch(AddCard({ Prod_id: id, User_id: user?.id })).unwrap();
            window.location.href = '/card';
        }
        catch (e) {
            message.error("Failing Adding to Card");
        }
    }

    return (
        <>
            <div className='md:w-[250px] w-[200px] overflow-hidden' onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} key={id}>
                <div className='single-product flex flex-col gap-2 p-2'>
                    <div className="image-container md:h-[220px] h-[180px] bg-[#F5F5F5] rounded relative flex flex-col justify-center items-center overflow-hidden">
                        <img src={img} alt="product" className='p-7 object-cover z-[-22]' />
                        {offerPercentage && <div className="offre bg-primary absolute top-1 left-1 px-3 py-1 rounded-md text-white text-[11px]">-{offerPercentage}%</div>}
                        <div className='flex flex-col absolute top-1 right-1 gap-1'>
                            <div>
                                {isLoved ? <IoIosHeartEmpty className={LovedIconStyle} onClick={() => LoveCancled(id)} /> : <IoIosHeartEmpty className={IconsStyle} onClick={() => LoveClick(id)} />}
                            </div>
                            <div>
                                <SlEye className={IconsStyle} onClick={() => setopen(true)} />
                                <Lightbox
                                    open={open}
                                    close={() => setopen(false)}
                                    slides={[{ src: img }]}
                                    carousel={{ finite: true }}
                                    render={{ buttonNext: () => null, buttonPrev: () => null }}
                                />
                            </div>
                        </div>
                        <Link
                            onClick={handleAddCard}
                            className={`bg-black flex w-full font-poppins text-white justify-center py-2 rounded-b-md z-[-1] absolute bottom-0 ${MouseOver || Width < 769 ? 'translate-y-[0]' : 'translate-y-[50px]'}`}>

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
            </div >
        </>
    );
}

export default index;