import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

const ArrowsStyle = `md:size-[18px] text-[#00000084]`;

export function RightArrow({ goNext, className }) {
    return (
        <ArrowsContainer onClick={goNext} className={className}><FaArrowRight className={ArrowsStyle} /></ArrowsContainer>
    );
}
export function LeftArrow({ goPrev, className }) {
    return (
        <ArrowsContainer onClick={goPrev} className={className}><FaArrowLeft className={ArrowsStyle} /></ArrowsContainer>
    );
}


const ArrowsContainer = styled.div`
    background: #00000012;
    padding: 7px;
    border-radius: 50%; 
    color: #000000;
    cursor: pointer;
`;