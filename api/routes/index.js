const express = require('express');
const app = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



app.post('/sign-up', function (req, res) {
  if (req.body.password.length >= 8) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      const postCustomer = {
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      };
      db.query(`INSERT INTO users SET ?`, postCustomer, function (err, result) {
        if (err) throw err;
        console.log('1 record inserted', result);
        res.status(200).send({id_user: result.insertId});
      });
    });
  }
});

app.post('/sign-in', function (req, res) {
  const email = req.body.email;
  db.query(
    `select * FROM users where email =  ?`,
    [email],
    function (err, result) {
      if (err) throw err;

      if (!result.length) res.status(203).send('sorry we dont know this user');
      else {
        let pseudo = result[0].pseudo;
        let hash = result[0].password;
        bcrypt.compare(
          `${req.body.password}`,
          hash,
          function (err, bcriptResult) {
            if (bcriptResult) {
              const response = {
                member: {
                  user_id: result[0].id_user,
                  user_pseudo: pseudo,
                  admin_id: result[0].admin,
                },
                token: jwt.sign({email: email}, 'clouSecret', {
                  expiresIn: 3600,
                }),
              };
              console.log('you are authenticated');

              res.status(200).send(response);
            } else {
              console.log('errsignin', err);
              res.status(203).send('sorry we dont know this user');
            }
          }
        );
      }
    }
  );
});

app.get('/members', function (req, res) {
  let sql = `SELECT * FROM users`;
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      let resu = [];
      for (let i = 0; i < result.length; i++) {
        resu.push(result[i]);
      }
      res.send({members: resu});
    }
  });
});

app.get('/profil', function (req, res) {
  const id_user = req.body.id_user;
  db.query(
    `SELECT * FROM users WHERE id_user =  ? `,
    [id_user],
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get('/messages', function (req, res) {
  const sql = `SELECT * FROM message `;
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.send({error: err.code});
    } else {
      res.send({messages: result});
    }
  });
});

app.delete('/message/:id', function (req, res) {
  const id_message = req.params.id;
  console.log('id_message', req.params.id);
  db.query(
    `DELETE FROM message WHERE id_message = ? `,
    [id_message],
    function (err, result) {
      console.log('result', result);
      if (err) throw err;
      res.send({
        message: 'succesully deleted',
      });
    }
  );
});

app.delete('/members/:id', function (req, res) {
  const id_user = req.params.id;
  console.log('id_user', req.params.id);
  db.query(
    `DELETE FROM users WHERE id_user = ? `,
    [id_user],
    function (err, result) {
      console.log('result', result);
      if (err) throw err;
      res.send({
        success: 'succesully deleted',
      });
    }
  );
});

module.exports = app;
