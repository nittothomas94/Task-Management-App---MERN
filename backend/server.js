const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//db
require('./db');

//routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log('Backend App Is Running');
});
