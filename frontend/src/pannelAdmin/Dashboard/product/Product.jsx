import React, { useRef, useState } from 'react'
import { Button, message } from 'antd';
import AddPro from './AddPro';
import CardPro from './CardPro';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../../features/Category/CategoryFunctions';
import { GetProducts } from '../../../features/Product/ProductFunctions';

function Product() {

    const dispatch = useDispatch();
    const Category = useSelector(state => state.category);

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        const getcate = async () => {
            try {
                await dispatch(GetCategories()).unwrap();
                await dispatch(GetProducts()).unwrap();
            }
            catch {
                messageApi.error("Failing getting data");
            }
        }
        getcate();
    }, []);

    return (
        <div className='w-full h-[100vh] bg-gray-100'>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Gestionne des Produits :</h1>
            <span className='w-full flex justify-end'>
                <AddPro categories={Category} />
            </span>
            <CardPro />

        </div>
    )
}

export default Product