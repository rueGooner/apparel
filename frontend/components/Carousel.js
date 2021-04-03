import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import CarouselCard from "./cards/CarouselCard";

SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);

export default function Carousel({ featuredProducts }) {
  return (
    <Swiper
      className="max-w-4xl mx-auto h-96"
      spaceBetween={50}
      slidesPerView={1}>
      {featuredProducts.map((featuredProduct, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="grid grid-rows-2 grid-cols-3 gap-1 h-full" >
              {
                featuredProduct && featuredProduct.map((product, index) => {
                  return (
                    <CarouselCard product={product} index={index} />
                  )
                })
              }
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
