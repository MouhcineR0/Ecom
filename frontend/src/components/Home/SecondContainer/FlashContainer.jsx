import React from 'react';
import CountdownTimer from '../../../tools/Countdown';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from '../../../tools/PaginationArrows';
import Title from '../../utils/Title';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../../../features/Product/ProductFunctions';
import { message } from 'antd';

const FlashContainer = ({ targetDate, swiper, setSwiper }) => {

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    const dispatch = useDispatch();
    const { flashsales } = useSelector(state => state.product);

    useEffect(() => {
        const flashpro = async () => {
            try {
                await dispatch(GetProducts({ flashsales: true })).unwrap();
            }
            catch {
                message.error("Failing Getting Flash Products !");
            }
        }
        flashpro();
    }, [])

    return (
        <>
            {flashsales?.length ?
                <div className='container mx-auto font-poppins font-semibold lg:mt-[100px] md:mt-[75px] mt-[50px]'>
                    <Title title="Today's" />
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-7 items-center mt-5'>
                            <h1 className='text-[18px] lg:text-[24px] md:text-[21px]'>Flash Sales</h1>
                            <h1 className='countdown select-none'>
                                <CountdownTimer targetDate={targetDate} />
                            </h1>
                        </div>
                        <div className="Arrows hidden gap-2 md:flex">
                            <LeftArrow goPrev={goPrev} />
                            <RightArrow goNext={goNext} />
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );
};

export default FlashContainer;
