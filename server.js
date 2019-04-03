//Install express server
const express = require('express');
const path = require('path');

const app = express();

var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);
console.log('Node server running in port:', port);
