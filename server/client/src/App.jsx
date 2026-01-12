import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './components/Carousel';

export default function App() {
  const [slides, setSlides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/slides')
      .then(res => setSlides(res.data))
      .catch(err => {
        setError('Failed to load slides from server. Using fallback content.');
        setSlides([
          { id: 1, title: 'Intro (fallback)', image: 'https://via.placeholder.com/1200x600?text=Intro', content: 'Intro content fallback.' },
          { id: 2, title: 'Bill 1 (fallback)', image: 'https://via.placeholder.com/1200x600?text=Bill+1', content: 'Bill 1 fallback.' },
          { id: 3, title: 'Bill 2 (fallback)', image: 'https://via.placeholder.com/1200x600?text=Bill+2', content: 'Bill 2 fallback.' },
          { id: 4, title: 'Bill 3 (fallback)', image: 'https://via.placeholder.com/1200x600?text=Bill+3', content: 'Bill 3 fallback.' },
          { id: 5, title: 'Bill 4 (fallback)', image: 'https://via.placeholder.com/1200x600?text=Bill+4', content: 'Bill 4 fallback.' },
          { id: 6, title: 'Bill 5 (fallback)', image: 'https://via.placeholder.com/1200x600?text=Bill+5', content: 'Bill 5 fallback.' },
          { id: 7, title: 'Conclusion (fallback)', image: 'https://via.placeholder.com/1200x600?text=Conclusion', content: 'Conclusion fallback.' }
        ]);
      });
  }, []);

  return (
    <div>
      {error && <div style={{padding:12, background:'#fff3cd', color:'#856404'}}>{error}</div>}
      {slides ? <Carousel slides={slides} /> : <div style={{padding:20}}>Loading slides...</div>}
    </div>
  );
}
cat > client/src/main.jsx <<'JS'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);
