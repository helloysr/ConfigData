const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is healthy' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
