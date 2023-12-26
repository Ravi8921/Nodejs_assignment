// app.js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
const messagesRoutes = require('./routes/data');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/login', loginRoutes);
// app.use('/set-username',loginRoutes);
app.use('/', messageRoutes);
app.use('/messages', messagesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
