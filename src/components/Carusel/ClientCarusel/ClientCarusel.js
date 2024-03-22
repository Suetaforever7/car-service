import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/test-1.png";
import img2 from "../../images/test-2.png";
import img3 from "../../images/test-3.png";
import img4 from "../../images/test-4.png";
import "swiper/css";
import "swiper/css/pagination";
import "./ClientCarusel.css";
import { Pagination,Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
    <div className="top-text-carusel">
    <h6>// TESTIMONIAL //</h6>
        <h1>Our Clients Say!</h1>
    </div>
      <div className="client">

        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-1">
            <img src={img1} alt="" />
            <h2>Client Name</h2>
            <h5>Profession</h5>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
            <div className="slide-1">
            <img src={img2} alt="" />
            <h2>Client Name</h2>
            <h5>Profession</h5>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-1">
            <img src={img3} alt="" />
            <h2>Client Name</h2>
            <h5>Profession</h5>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slide-1">
            <img src={img4} alt="" />
            <h2>Client Name</h2>
            <h5>Profession</h5>
           
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
