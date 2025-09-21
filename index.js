const express = require('express');
const urlRoute = require('./routes/url');
const{ connectDB } = require('./connect');

const app = express();
const port = 8000;  

connectDB('mongodb://localhost:27017/short-url')
.then(() => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/url',urlRoute);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});