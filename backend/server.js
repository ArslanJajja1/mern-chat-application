const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const { chats } = require('./data/data');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Express API is running ');
});
app.use('/api/user', userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server is running on port ', PORT));
