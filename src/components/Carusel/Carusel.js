import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import car from "../images/carousel-1.png";
import car2 from "../images/carousel-2.png";
import { FaArrowRight } from "react-icons/fa6";
import "./Carusel.css";
import { Autoplay, Navigation } from "swiper/modules";
export default function Banner() {
  return (
    <>
    <div className="main-carusel">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="carusel">
          <div className="color">
            <div className="box">
              <p className="head-text">// Car Servising //</p>
              <br />
              <h1 className="paragraph">
                Qualified Car <br /> Wash Service Center
              </h1>
              <br />
              <button className="button">Learn more
              <FaArrowRight /></button>
            </div>
            <div className="b-right">
              <img src={car} alt="" id="img1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carusel-2">
          <div className="color">
            <div className="box">
              <p className="head-text">// Car Servising //</p>
              <br />
              <h1 className="paragraph">
                Qualified Car <br /> Wash Service Center
              </h1>
              <br />
              <button className="button">Learn more
              <FaArrowRight /></button>
            </div>
            <div className="b-right">
              <img src={car2} alt="" id="img2" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
