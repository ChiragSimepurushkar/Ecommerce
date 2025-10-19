import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Productitem from '../Productitem';
import { Navigation } from 'swiper/modules';
const ProductsSlider = (props) => {
    return (
        <div className="productsSlider py-3">
            <Swiper slidesPerView={props.items}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
                  <SwiperSlide>
                    <Productitem/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductsSlider;