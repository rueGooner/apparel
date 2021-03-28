import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";

SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3500 }} effect="fade">
      {[
        "https://picsum.photos/2000/700?grayscale",
        "https://picsum.photos/2000/700?blur",
        "https://picsum.photos/2000/700?blur=2",
        "https://picsum.photos/2000/700?grayscale",
      ].map((link, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={link} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
