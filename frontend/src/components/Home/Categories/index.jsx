import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../../utils/Title';
import List from './List';
import axiosInstance from '../../../features/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../../features/Category/CategoryFunctions';

function index() {

    const Categories = [
        // {
        //     name: 'Electronics',
        //     picture: electronics
        // },
        // {
        //     name: 'Fashion',
        //     picture: fashion
        // },
        // {
        //     name: 'Home',
        //     picture: home
        // },
        // {
        //     name: 'Health',
        //     picture: health
        // },
        // {
        //     name: 'Sports',
        //     picture: sports
        // },
        // {
        //     name: 'Media',
        //     picture: media
        // }
    ];

    const dispatch = useDispatch();
    const CategoryObj = useSelector(state => state.category);

    useEffect(() => {
        dispatch(GetCategories());
    }, [])
    console.log(CategoryObj);

    return (
        <div className="mx-auto container">
            <Title title={'Categories'} />
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Browse By Category</h1>
            <List data={CategoryObj.data} />
        </div>
    );
}

export default index;