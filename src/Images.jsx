import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow } from 'swiper';

import slide_image_1 from './assets/images/img_1.png';
import slide_image_2 from './assets/images/img_2.png';
import slide_image_3 from './assets/images/img_3.png';
import slide_image_4 from './assets/images/img_4.png';
import slide_image_5 from './assets/images/img_5.png';
import slide_image_6 from './assets/images/img_6.png';
import slide_image_7 from './assets/images/img_7.png';
import slide_image_8 from './assets/images/img_8.png';
import slide_image_9 from './assets/images/img_9.png';
import cap from './assets/images/cap.png';
import "./Images.css"

function Images() {
  const splitText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="blurred-line">{line}</span>
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
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="Flower 1" />
          <div className="image-text">{splitText("Ты — свет в моем окне, мой мир и счастья миг,\nС тобой цветет весна, и каждый день велик.\nЛюблю тебя безмерно, ты — мой вдохновенья дар,\nС тобой я обретаю любви прекрасный жар.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="Flower 2" />
          <div className="image-text">{splitText("Ты — мой ангел-медик, жизнь даришь, как весна,\nМедицина многогранна, как все четыре времени года.\nЗимой ты лечишь душу, как летом даришь свет,\nТы — чудо всех сезонов, в тебе мой счастья след.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="Flower 3" />
          <div className="image-text">{splitText("Ты, как осень золотая, теплота и красота,\nЛистья нежно шелестят, даря твою мечту.\nВ заботе о больных ты, словно осень мудрая,\nПриносишь всем надежду в каждый новый день.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="Flower 4" />
          <div className="image-text">{splitText("Ты, как зима хрустальная, чистота и белизна,\nСнежинки падают, как твои нежные слова.\nВ холода ты согреваешь, добротой своей сверкая,\nЛечишь души и тела, добротой искря.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="Flower 5" />
          <div className="image-text">{splitText("Ты, как лето жаркое, страсть и свет в тебе горят,\nСолнца лучик в каждом взгляде, радость всем даря.\nСилой и энергией наполняешь каждый день,\nТы — как летний день прекрасный, и в этом вся ты.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="Flower 6" />
          <div className="image-text">{splitText("Ты, как весна цветущая, нежность и тепло,\nРасцветаешь, словно май, принося с собой добро.\nС каждым днем твой свет сильнее, радость всем вокруг,\nТы — весна, что дарит жизнь, наполняя сердца звуком.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="Flower 7" />
          <div className="image-text">{splitText("Ты, как день чудесный ясный, светишь, нежно озаря,\nСолнечным лучом согреешь, улыбкой нежной маня.\nВ каждом часе твоей силы, в каждом миге доброты,\nТы — мой день, мое сиянье, воплощенье красоты.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="Flower 8" />
          <div className="image-text">{splitText("Ты, как ночь спокойная, таинственная и мила,\nЗвезды в небе зажигаешь, тьму рассеивая мгла.\nВ тишине твоей безмолвной нахожу покой и свет,\nТы — моя ночная нежность, твой люблю я силуэт.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="Flower 9" />
          <div className="image-text">{splitText("Ты всегда первая, как утренний свет,\nВ каждом шаге твоем вижу я успех.\nСреди множества лиц выделяешься ты,\nТы — мой лидер, мой компас в бескрайних мечтах.")}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cap} alt="Flower 9" />
          <div className="image-text">{splitText("Капибара тихо\t \t \t \t \t \nС девушкой дружит в тени,\t \t \t \t \t \nСчастье пушистых.")}</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Images;
