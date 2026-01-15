import React from 'react';

export default function SlideCard({ slide }) {
  return (
    <div className="slide-card">
      <h1>{slide.title}</h1>
      <img src={slide.image} alt={slide.title} />
      <p>{slide.content}</p>
      {slide.linkedin && (
        <a href={slide.linkedin} target="_blank" rel="noopener noreferrer">
          Visit my LinkedIn
        </a>
      )}
    </div>
  );
}



 