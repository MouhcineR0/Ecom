import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import ProductDisplay from '../../Product/';

import SwiperCore from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import testImg from '../../../assets/imgs/product.png';
import testImg1 from '../../../assets/imgs/product1.png';
import testImg2 from '../../../assets/imgs/product2.png';
import testImg3 from '../../../assets/imgs/product3.png';
import { LeftArrow, RightArrow } from '../../../tools/PaginationArrows';

SwiperCore.use([Navigation]);


function FlashProducts({ swiper, setSwiper }) {

    const SliderStyle = 'flex justify-center items-center';

    const [open, setOpen] = useState(false);

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
            id: 3,
            title: "Razer DeathAdder Elite",
            price: 59.99,
            oldPrice: 69.99,
            rating: 4.7,
            ratingCount: 150,
            img: testImg2,
            offerPercentage: 10,
            Loved: true
        },
        {
            id: 4,
            title: "SteelSeries Rival 310",
            price: 69.99,
            oldPrice: 79.99,
            rating: 4.6,
            ratingCount: 180,
            img: testImg3,
            offerPercentage: 15,
            Loved: false
        },
        {
            id: 5,
            title: "Corsair Scimitar RGB",
            price: 89.99,
            oldPrice: 99.99,
            rating: 4.9,
            ratingCount: 220,
            img: testImg,
            offerPercentage: 10,
            Loved: true
        },
        {
            id: 6,
            title: "HyperX Pulsefire Surge",
            price: 54.99,
            oldPrice: 64.99,
            rating: 4.4,
            ratingCount: 130,
            img: testImg,
            offerPercentage: 15,
            Loved: false
        }
    ];

    return (
        <div className='container mx-auto flex justify-center items-center'>
            <LeftArrow goPrev={goPrev} className={'md:hidden'} />
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    enabled: false,

                }}
                breakpoints={{
                    550: {  
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {fakeData.map((ele, ind) => {
                    return (
                        <>
                            <SwiperSlide className={SliderStyle} key={ind}>
                                <ProductDisplay id={ele.id} img={ele.img} offerPercentage={ele.offerPercentage}
                                    oldPrice={ele.oldPrice} price={ele.price} rating={ele.rating} ratingCount={ele.ratingCount}
                                    title={ele.title} key={ind} Loved={ele.Loved} />
                            </SwiperSlide>
                        </>
                    );
                })}
            </Swiper>
            <RightArrow goNext={goNext} className={'md:hidden'} />
        </div>
    );
}



export default FlashProducts;