import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slides from '../data/slides';

const SlideCard = ({ slide }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 20
  }}>
    <h1 style={{ margin: 0, fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
      {slide.title}
    </h1>
    <img
      src={slide.image}
      alt={slide.title}
      style={{ maxWidth: '90%', height: 'auto', borderRadius: 8 }}
    />
    <div style={{ maxWidth: 900, padding: 10, fontSize: 18, lineHeight: 1.5, textAlign: 'center' }}>
      {slide.content}
    </div>
    {slide.linkedin && (
      <a
        href={slide.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 20,
          padding: '12px 24px',
          backgroundColor: '#007aff',
          color: '#fff',
          borderRadius: 6,
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Visit my LinkedIn
      </a>
    )}
  </div>
);

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      spaceBetween={50}
      slidesPerView={1}
      style={{ width: '100%', height: '100vh' }}
    >
      {slides.map(s => (
        <SwiperSlide key={s.id}>
          <SlideCard slide={s} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

