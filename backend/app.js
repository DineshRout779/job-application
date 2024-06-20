const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// connect DB
connectDB();

// routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
