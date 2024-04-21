import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cover from '../../../assets/imgs/cov.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper swiper-1 w-[60%] pt-3 md:pt-1 rounded-lg flex justify-center items-center"
            >
                <SwiperSlide>
                    <img src={Cover} className='rounded' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cover} className='rounded' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cover} className='rounded' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cover} className='rounded' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cover} className='rounded' alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
