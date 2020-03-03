const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsList = require('./routers/posts');
const userList = require('./routers/users');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
});

app.use('/api', postsList);
app.use('/api', userList);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});