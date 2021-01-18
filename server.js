const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
