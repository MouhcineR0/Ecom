import React from 'react';
import Title from '../../utils/Title';
import MapProduct from '../../utils/MapProduct';
import testImg from '../../../assets/imgs/product.png';
import testImg1 from '../../../assets/imgs/product1.png';
import testImg2 from '../../../assets/imgs/product2.png';
import ImgCover01 from '../../../assets/imgs/cover01.png';
import Button from '../../utils/Button';


function index() {

    const fakeData = [
        {
            id: 1,
            title: "HAVIT HV-G92 Gamepad",
            price: 49.99,
            oldPrice: 59.99,
            rating: 4.5,
            ratingCount: 120,
            img: testImg,
            offerPercentage: 20,
            Loved: true
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 1,
            title: "HAVIT HV-G92 Gamepad",
            price: 49.99,
            oldPrice: 59.99,
            rating: 4.5,
            ratingCount: 120,
            img: testImg,
            offerPercentage: 20,
            Loved: true
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 1,
            title: "HAVIT HV-G92 Gamepad",
            price: 49.99,
            oldPrice: 59.99,
            rating: 4.5,
            ratingCount: 120,
            img: testImg,
            offerPercentage: 20,
            Loved: true
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 2,
            title: "Logitech G502 Hero",
            price: 79.99,
            oldPrice: 89.99,
            rating: 4.8,
            ratingCount: 200,
            img: testImg1,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 3,
            title: "Razer DeathAdder Elite",
            price: 59.99,
            oldPrice: 69.99,
            rating: 4.7,
            ratingCount: 150,
            img: testImg2,
            offerPercentage: 10,
            Loved: true
        }];

    return (
        <div className='mx-auto container flex flex-col'>
            <img src={ImgCover01} alt="" className='w-full my-2 rounded-sm' />
            <Title title={'Our Products'} />
            <h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Explore Our Products</h1>
            <MapProduct data={fakeData} />
            <Button Name={'View All Products'} className={'mx-auto'} />
        </div>
    );
}

export default index;