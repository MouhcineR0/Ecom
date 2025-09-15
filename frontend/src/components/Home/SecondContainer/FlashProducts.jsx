import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import ProductDisplay from '../../Product/';

import SwiperCore from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import { LeftArrow, RightArrow } from '../../../tools/PaginationArrows';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../../../features/Product/ProductFunctions';
import { useEffect } from 'react';

SwiperCore.use([Navigation]);


function FlashProducts({ swiper, setSwiper }) {

    const SliderStyle = 'flex justify-center items-center';

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const { flashsales, loading } = useSelector(state => state.product);

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

    return (
        <>
            {!loading &&
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
                                slidesPerView: flashsales?.length > 1 ? 2 : flashsales?.length,
                                spaceBetween: 20,
                            },
                            800: {
                                slidesPerView: flashsales?.length > 3 ? 3 : flashsales?.length,
                                spaceBetween: 40,
                            },
                            1000: {
                                slidesPerView: flashsales?.length > 4 ? 4 : flashsales?.length,
                                spaceBetween: 50,
                            }
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {flashsales.map((ele, ind) => {
                            return (
                                <>
                                    <SwiperSlide className={SliderStyle} key={ele._id}>
                                        <ProductDisplay id={ele._id} img={ele?.imagepath?.url} offerPercentage={ele.promo}
                                            oldPrice={150} price={ele.price} rating={ele.ratingCount} ratingCount={ele.ratingCount}
                                            title={ele.name} key={ind} Loved={true} />
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper >
                    <RightArrow goNext={goNext} className={'md:hidden'} />
                </div >
            }
        </>
    );
}



export default FlashProducts;