const express = require('express');

const port = parseInt(process.env.PORT, 10) || 9731;
const server = express();

server.get('/', function (req, res) {
  res.send('hello, world!');
});

server.listen(port, function () {
  console.log('Server started.');
});