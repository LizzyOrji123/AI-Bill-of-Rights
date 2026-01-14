import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ Import your static slides file if you want a fallback
import localSlides from '../data/slides.js';

// ✅ Import SlideCard from its own file
import SlideCard from './SlideCard';

export default function Carousel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/slides')
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(err => {
        console.error('Error fetching slides:', err);
        // ✅ fallback to local slides if API fails
        setSlides(localSlides);
      });
  }, []);

  console.log("Slides:", slides);

  // ✅ Loading fallback
  if (!Array.isArray(slides) || slides.length === 0) {
    return <div style={{ textAlign: 'center', padding: 50 }}>Loading slides…</div>;
  }

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
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <SlideCard slide={s} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


