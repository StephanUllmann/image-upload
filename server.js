require('dotenv').config();
const express = require('express');
require('colors');
const cors = require('cors');
const db = require('./db.js');

const userRouter = require('./routes/user.js');
const productRouter = require('./routes/products.js');

const port = process.env.PORT || 8765;

const app = express();
db();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('check');
});

app.use('/user', userRouter);
app.use('/product', productRouter);

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`.random);
});
