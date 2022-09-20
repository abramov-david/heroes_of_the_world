import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeroInfo.css";

export default function HeroInfo() {
  return (
    <div className="heroInfo">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        //scrollbar={{ draggable: true }}
        navigation
        pagination={{ type: "progressbar" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="swiperSlide">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            placeat unde, modi eaque provident ex tempora quidem, illum qui,
            architecto sunt ducimus quo alias. Quam eaque minima ut assumenda
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi placeat unde, modi eaque provident ex tempora quidem,
            illum qui, architecto sunt ducimus quo alias. Quam eaque minima ut
            assumenda consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi placeat unde, modi eaque provident ex
            tempora quidem, illum qui, architecto sunt ducimus quo alias. Quam
            eaque minima ut assumenda consequatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi placeat unde, modi eaque
            provident ex tempora quidem, illum qui, architecto sunt ducimus quo
            alias. Quam eaque minima ut assumenda consequatur.
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            placeat unde, modi eaque provident ex tempora quidem, illum qui,
            architecto sunt ducimus quo alias. Quam eaque minima ut assumenda
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi placeat unde, modi eaque provident ex tempora quidem,
            illum qui, architecto sunt ducimus quo alias. Quam eaque minima ut
            assumenda consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi placeat unde, modi eaque provident ex
            tempora quidem, illum qui, architecto sunt ducimus quo alias. Quam
            eaque minima ut assumenda consequatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi placeat unde, modi eaque
            provident ex tempora quidem, illum qui, architecto sunt ducimus quo
            alias. Quam eaque minima ut assumenda consequatur. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quasi placeat unde, modi
            eaque provident ex tempora quidem, illum qui, architecto sunt
            ducimus quo alias. Quam eaque minima ut assumenda consequatur.
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            placeat unde, modi eaque provident ex tempora quidem, illum qui,
            architecto sunt ducimus quo alias. Quam eaque minima ut assumenda
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi placeat unde, modi eaque provident ex tempora quidem,
            illum qui, architecto sunt ducimus quo alias. Quam eaque minima ut
            assumenda consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi placeat unde, modi eaque provident ex
            tempora quidem, illum qui, architecto sunt ducimus quo alias. Quam
            eaque minima ut assumenda consequatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi placeat unde, modi eaque
            provident ex tempora quidem, illum qui, architecto sunt ducimus quo
            alias. Quam eaque minima ut assumenda consequatur.
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            placeat unde, modi eaque provident ex tempora quidem, illum qui,
            architecto sunt ducimus quo alias. Quam eaque minima ut assumenda
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi placeat unde, modi eaque provident ex tempora quidem,
            illum qui, architecto sunt ducimus quo alias. Quam eaque minima ut
            assumenda consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi placeat unde, modi eaque provident ex
            tempora quidem, illum qui, architecto sunt ducimus quo alias. Quam
            eaque minima ut assumenda consequatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi placeat unde, modi eaque
            provident ex tempora quidem, illum qui, architecto sunt ducimus quo
            alias. Quam eaque minima ut assumenda consequatur.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
