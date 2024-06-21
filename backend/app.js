const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const jobRoutes = require('./routes/job');
const userRoutes = require('./routes/user');
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
app.use(cors());

// connect DB
connectDB();

// routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
