const express = require('express');
const app = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const io = require('socket.io');

app.post('/sign-up', function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    let postCustomer = {
      id_user: req.body.id_user,
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: req.body.password,
    };
    var sql = `INSERT INTO users (id_user, pseudo, email, password) VALUES ('${req.body.id_user}','${req.body.pseudo}', '${req.body.email}', '${hash}');`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log('1 record inserted');
      res.send(postCustomer);
    });
  });
});

app.post('/sign-in', function (req, res) {
  db.query(
    `select * FROM users where email = '${req.body.email}'`,
    function (err, result) {
      if (err) throw err;
      // let id = result[0].id;
      let pseudo = result[0].pseudo;
      let hash = result[0].password;
      bcrypt.compare(`${req.body.password}`, hash, function (err, resulta) {
        if (resulta) {
          console.log('you are authenticated');
          let token = jwt.sign(
            {
              user_id: result[0].id,
              user_pseudo: pseudo,
            },
            'secret',
            { expiresIn: '1h' }
          );
          res.status(200).send(token);
        } else {
          res.status(200).send('sorry we dont know this user');
        }
      });
    }
  );
});

module.exports = app;
