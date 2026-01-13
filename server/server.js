const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes 
const router = require('./routes/index.js'); 
app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => { 
  res.send('Welcome to your fresh server scaffold!'); 
});
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
