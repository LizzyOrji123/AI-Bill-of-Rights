import React from 'react';

export default function SlideCard({ slide }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 20 }}>
      <h1>{slide.title}</h1>
      <img src={slide.image} alt={slide.title} style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 8 }} />
      <p>{slide.content}</p>
      {slide.linkedin && (
        <a href={slide.linkedin} target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
      )}
    </div>
  );
}
