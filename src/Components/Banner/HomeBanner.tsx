import React from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/Banner-1.avif";
import banner2 from "../../assets/Banner-2.avif";
import banner3 from "../../assets/Banner-3.avif";
import banner4 from "../../assets/Banner-4.avif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const HomeBanner = () => {
  return (
    <div className="h-96 mx-auto lg:w-[45%]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" rounded-3xl bg-cover" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl  " src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
