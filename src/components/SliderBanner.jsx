import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import images from '../assets/imgs';
import ImageBanner from './ImageBanner';

const SliderBanner = () => {
  return (
    <div style={{
      width: "480",
      backgroundColor: "#e5e5e5",
      padding: "20px",
      marginBottom: "-115px"
    }}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageBanner image={images.laloBanner} alt={"super lalo"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBanner image={images.jobBanner} alt={"fest of job"} />
        </SwiperSlide>
      </Swiper>
    </div >
  )
}

export default SliderBanner