const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const { chats } = require('./data/data');
const app = express();
connectDB();
app.get('/', (req, res) => {
  res.send('Express API is running ');
});
app.get('/api/chat', (req, res) => {
  res.send(chats);
});
app.get('/api/chat/:id', (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
console.log(process.env.PORT);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server is running on port ', PORT));
