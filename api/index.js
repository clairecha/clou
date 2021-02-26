const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    credentials: true,
    origin: 'http://localhost:8083',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', function (socket) {
  console.log(socket.id);
  console.log('socketConnection');
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8083',
    methods: ['GET', 'POST'],
  })
);
app.use('/', routes);
app.use(express.urlencoded({ extended: false }));
http.listen(3000, function () {
  console.log('server running on port 3000');
});
