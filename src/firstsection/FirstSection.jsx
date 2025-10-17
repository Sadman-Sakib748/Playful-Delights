import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "../firstsection/FirstSection.Css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from "../files/Images/slider1.jpg";
import img2 from "../files/Images/slider2.jpg";
import img3 from "../files/Images/slider3.jpg";
import img4 from "../files/Images/slider4.jpg";
import img5 from "../files/Images/slider5.jpg";
import img6 from "../files/Images/slider6.jpg";
import img7 from "../files/Images/slider7.jpg";
import img8 from "../files/Images/slider8.jpg";

const FirstSection = () => {
  return (
    <div className="my-container">
      <h1 className="text-5xl text-center font-bold text-color mt-8 mb-16">Some of our happy customers</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default FirstSection;
