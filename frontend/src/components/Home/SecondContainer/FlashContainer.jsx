import React from 'react';
import CountdownTimer from '../../../tools/Countdown';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from '../../../tools/PaginationArrows';

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
    return (
        <div className='container mx-auto font-poppins font-semibold lg:mt-[100px] md:mt-[75px] mt-[50px]'>
            <h1 className='text-primary border-l-8 border-l-[#DB4444] px-3 py-1 select-none'>Today's</h1>
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
    );
};

export default FlashContainer;
