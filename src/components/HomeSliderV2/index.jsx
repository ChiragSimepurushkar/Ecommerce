import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';
const HomeSliderV2 = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
             autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination,Autoplay]}
            className="homeSliderV2"
        >
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden relative">
                    <img src="/im1.png" className="w-full h-full object-cover" />
                    <div className="info absolute z-50 p-8 top-0 -right-[100%] w-[50%] h-[100%]
                    flex items-center flex-col justify-center transition-all duration-700">
                        <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 ">Big Saving Days Sale</h4>
                        <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0 ">Buy Modern Mobile Phones</h2>

                        <h3 className="relative -right-[100%] opacity-0 flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
                            Starting At Only <span className="text-[#ff5252] text-[30px] font-[700]">$999.00</span>
                        </h3>
                        <div className="w-full  relative -right-[100%] opacity-0 btn_">
                            <Button className='btn-org'>SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden relative">
                    <img src="/img2.png" className="w-full h-full object-cover" />
                    <div className="info absolute z-50 p-8 top-0 opacity-0 -right-[100%] w-[50%] h-[100%]
                    flex items-center flex-col justify-center transition-all duration-700">
                        <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 duration-1000">Big Saving Days Sale</h4>
                        <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0 ">Women Solid Round Green T-Shirt</h2>
                        <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                            Starting At Only <span className="text-[#ff5252] text-[30px] font-[700]">$59.00</span>
                        </h3>
                        <div className="w-full relative -right-[100%] opacity-0 btn_">
                            <Button className='btn-org'>SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default HomeSliderV2;