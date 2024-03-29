require('dotenv').config(); // this will allow us to do process.env file
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/todo', todoRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
