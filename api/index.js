const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    credentials: true,
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', function (socket) {
  console.log('socke_tid', socket.id);
  console.log('socketConnection');
  socket.on('SEND_MESSAGE', function (data) {
    // save bdd avec id user
    console.log('tamere ', data)
    io.emit('MESSAGE', data);
  
  });
});

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  })
);
app.use('/', routes);
http.listen(3000, function () {
  console.log('server running on port 3000');
});
