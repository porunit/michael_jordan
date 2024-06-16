import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper';

import slide_image_1 from './assets/images/img_1.png';
import slide_image_2 from './assets/images/img_2.png';
import slide_image_3 from './assets/images/img_3.png';
import slide_image_4 from './assets/images/img_4.png';
import slide_image_5 from './assets/images/img_5.png';
import slide_image_6 from './assets/images/img_6.png';
import slide_image_7 from './assets/images/img_7.png';
import slide_image_8 from './assets/images/img_8.png';
import slide_image_9 from './assets/images/img_9.png';
import "./Images.css"

function Images() {
  // Function to split text into words and wrap them in spans
  const splitText = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="blurred-word">
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={0}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="Flower 1" />
          <div className="image-text">{splitText("Beautiful Red Rose")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="Flower 2" />
          <div className="image-text">{splitText("Lovely White Daisy")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="Flower 3" />
          <div className="image-text">{splitText("Vibrant Yellow Tulip")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="Flower 4" />
          <div className="image-text">{splitText("Elegant Pink Orchid")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="Flower 5" />
          <div className="image-text">{splitText("Cheerful Sunflower")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="Flower 6" />
          <div className="image-text">{splitText("Delicate Bluebell")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="Flower 7" />
          <div className="image-text">{splitText("Graceful Lavender")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="Flower 7" />
          <div className="image-text">{splitText("Graceful Lavender")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="Flower 7" />
          <div className="image-text">{splitText("Graceful Lavender")}</div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default Images;
