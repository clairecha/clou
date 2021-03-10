const express = require('express');
const app = express();
const db = require('./database/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    credentials: true,
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'DELETE'],
  },
});

io.on('connection', function (socket) {
  socket.on('SEND_MESSAGE', function (data) {
    console.log('in send message');
    const newMessage = {
      id_salon: 1,
      id_user: data.id,
      pseudo: data.pseudo,
      content: data.content,
      date: new Date(),
    };
    db.query(`INSERT INTO message SET ? `, newMessage, function (err, result) {
      if (err) {
        io.emit('error', err.code);
      } else {
        io.emit('MESSAGE', data);
      }
    });

  });
});

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'DELETE'],
  })
);
app.use('/', routes);
http.listen(3000, function () {
  console.log('server running on port 3000');
});
