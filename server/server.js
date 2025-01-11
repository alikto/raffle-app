const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const emailRoutes = require('./routes/emailRoutes.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
