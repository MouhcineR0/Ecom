import React from 'react';
import CountdownTimer from '../../../tools/Countdown';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

const FlashContainer = ({ targetDate }) => {

    return (
        <div className='container mx-auto font-poppins font-semibold mt-[100px]'>
            <h1 className='text-primary border-l-8 border-l-[#DB4444] px-3 py-1 select-none'>Today's</h1>
            <div className='flex justify-between items-center'>
                <div className='flex gap-7 items-center mt-5'>
                    <h1 className='text-[24px]'>Flash Sales</h1>
                    <h1 className='countdown select-none'>
                        <CountdownTimer targetDate={targetDate} />
                    </h1>
                </div>
                <div className="Arrows flex gap-2">
                    <ArrowsContainer><FaArrowLeft size={18} />arrow</ArrowsContainer>
                    <ArrowsContainer><FaArrowRight size={18} /></ArrowsContainer>
                </div>
            </div>
        </div>
    );
};

const ArrowsContainer = styled.div`
    background: #00000012;
    padding: 7px;
    border-radius: 50%; 
    color: #000000;
    cursor: pointer;
`;

export default FlashContainer;
