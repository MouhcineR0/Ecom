import React, { useEffect } from 'react';
import styled from 'styled-components';
import Title from '../../utils/Title';


import List from './List';
import home from '../../../assets/icons/home';
import media from '../../../assets/icons/media';
import fashion from '../../../assets/icons/fashion';
import sports from '../../../assets/icons/sports';
import electronics from '../../../assets/icons/electronics';
import health from '../../../assets/icons/health';



function index() {

    const Categories = [
        {
            name: 'Electronics',
            picture: electronics
        },
        {
            name: 'Fashion',
            picture: fashion
        },
        {
            name: 'Home',
            picture: home
        },
        {
            name: 'Health',
            picture: health
        },
        {
            name: 'Sports',
            picture: sports
        },
        {
            name: 'Media',
            picture: media
        }
    ];

    useEffect(() => {
        
    }, [])

    return (
        <div className="mx-auto container">
            <Title title={'Categories'} />
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Browse By Category</h1>
            <List data={Categories} />
        </div>
    );
}

export default index;