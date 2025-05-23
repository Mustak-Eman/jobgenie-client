const express = require('express');
const pool = require('./queries'); // Import your db pool

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
