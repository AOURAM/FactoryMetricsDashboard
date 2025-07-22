const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/metrics', (req, res) => {
  res.json({
    temperature: 72,
    pressure: 101.3,
    uptime: '45 hours'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
