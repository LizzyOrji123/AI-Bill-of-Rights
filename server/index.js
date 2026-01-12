const express = require('express');
const cors = require('cors');
const path = require('path');
const slides = require('./data/slides.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/slides', (req, res) => res.json(slides));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
