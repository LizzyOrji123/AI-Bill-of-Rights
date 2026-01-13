import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlideCard = ({ slide }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: 20
    }}>
      <h1 style={{
        margin: 0,
        fontSize: 28,
        textAlign: 'center'
      }}>
        {slide.title}
      </h1>
      <img
        src={slide.image}
        alt={slide.title}
        style={{
          maxWidth: '90%',
          height: 'auto',
          borderRadius: 8
        }}
      />
      <div style={{
        maxWidth: 900,
        padding: 10,
        fontSize: 18,
        lineHeight: 1.5,
        textAlign: 'left'
      }}>
        {slide.content}
      </div>
    </div>
  );
};

export default function Carousel({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      spaceBetween={50}
      slidesPerView={1}
      style={{ height: '100vh' }}
    >
      {slides.map(s => (
        <SwiperSlide key={s.id}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <SlideCard slide={s} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
