const express = require('express');
const router = express.Router();

// Temporary slides data 
const slides = [ 
    { id: 1, title: "Intro", image: "https://placehold.co/800x400/FF006E/FFF?text=Intro", content: "Welcome to the AI Carousel." }, 
    { id: 2, title: "Slide 2", image: "https://placehold.co/800x400/8338EC/FFF?text=Slide+2", content: "Bold AI colors make it vibrant." }, 
    { id: 3, title: "Slide 3", image: "https://placehold.co/800x400/3A86FF/FFF?text=Slide+3", content: "Each page has a title, image, and content." }, 
    { id: 4, title: "Slide 4", image: "https://placehold.co/800x400/FB5607/FFF?text=Slide+4", content: "Navigation arrows let you move back and forth." }, 
    { id: 5, title: "Slide 5", image: "https://placehold.co/800x400/FFBE0B/000?text=Slide+5", content: "Keyboard arrows also work for navigation." }, 
    { id: 6, title: "Slide 6", image: "https://placehold.co/800x400/06D6A0/000?text=Slide+6", content: "Simple, light, and expandable in phases." }, 
    { id: 7, title: "Final Slide", image: "https://placehold.co/800x400/FFD60A/000?text=Final+Slide", content: "Click below to visit my LinkedIn.", linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE" } ];

// Example route
router.get('/slides', (req, res) => {
  res.json(slides);
});

module.exports = router;

