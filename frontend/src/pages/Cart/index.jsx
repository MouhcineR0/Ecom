import React, { useEffect, useState } from 'react';
import testImg from '../../assets/imgs/product.png';
import testImg1 from '../../assets/imgs/product1.png';
import testImg2 from '../../assets/imgs/product2.png';
import CartTable from '../../components/Cart/CartTable';
import { Link } from 'react-router-dom';
import UnderTable from '../../components/Cart/UnderTable';

const fakeData = [
    // {
    //     id: 1,
    //     title: "HAVIT HV-G92 Gamepad",
    //     price: 49.99,
    //     rating: 4.5,
    //     ratingCount: 120,
    //     img: testImg,
    //     quantity: 1
    // },
    // {
    //     id: 2,
    //     title: "Logitech G502 Hero",
    //     price: 79.99,
    //     rating: 4.8,
    //     ratingCount: 200,
    //     img: testImg1,
    //     quantity: 1
    // },
    // {
    //     id: 2,
    //     title: "Logitech G502 Hero",
    //     price: 79.99,
    //     rating: 4.8,
    //     ratingCount: 200,
    //     img: testImg1,
    //     quantity: 1
    // },
    // {
    //     id: 3,
    //     title: "Razer DeathAdder Elite",
    //     price: 59.99,
    //     rating: 4.7,
    //     ratingCount: 150,
    //     img: testImg2,
    //     quantity: 1
    // }
];

function index() {

    const [TotalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const Total = fakeData.reduce((sum, ele) => sum + (ele.quantity * ele.price), 0);
        setTotalPrice(Total);
    }, [fakeData]);
    console.log(TotalPrice);
    return (
        <>
            {
                fakeData.length ? (
                    <div className='container mx-auto flex flex-col'>
                        <CartTable data={fakeData} />
                        <Link className='px-6 py-3 font-poppins font-medium border-0 outline outline-gray-500 outline-1 self-start rounded-md' to={'/'}>Return To Shop</Link>
                        <UnderTable Total={TotalPrice} />
                    </div>)
                    :
                    <h1 className='text-center text-4xl text-black font-poppins my-28'>
                        Panier is Empty
                    </h1>
            }

        </>
    );
}

export default index;