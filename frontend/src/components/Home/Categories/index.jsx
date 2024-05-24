import React from 'react';
import styled from 'styled-components';
import Title from '../../utils/Title';


import List from './List';
import home from '../../../assets/icons/home';
// import media from '../../../assets/icons/media.svg';
// import fashion from '../../../assets/icons/fashion.svg';
// import sports from '../../../assets/icons/sports.svg';
// import electronics from '../../../assets/icons/electronics.svg';
// import health from '../../../assets/icons/health.svg';



function index() {

    const Categories = [
        {
            name: 'Electronics',
            picture: home
        },
        {
            name: 'Fashion',
            picture: home
        },
        {
            name: 'Home',
            picture: home
        },
        {
            name: 'Health',
            picture: home
        },
        {
            name: 'Sports',
            picture: home
        },
        {
            name: 'Media',
            picture: home
        }
    ];

    return (
        <div className="mx-auto container mt-[50px]">
            <Title title={'Categories'} />
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Browse By Category</h1>
            <List data={Categories} />
            {/* <Categorie /> */}
        </div>
    );
}

export default index;