const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index');

const server = app.listen(3000, function () {
  console.log('server running on port 3000');
});

const io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data);
  });
});

var bodyParser = require('body-parser');
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
};
app.use(allowCrossDomain);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.urlencoded({ extended: false }));
