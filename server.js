const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/media', require('./routes/image-upload'));
app.use('/api/v1/users', require('./routes/users'));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
