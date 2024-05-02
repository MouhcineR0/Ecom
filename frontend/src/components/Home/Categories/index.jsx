import React from 'react';
import styled from 'styled-components';
import Title from '../../utils/Title';

function index() {
    return (
        <div className="mx-auto container mt-[50px]">
            <Title title={'Categories'} />
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold'>Category</h1>
        </div>
    );
}

export default index;