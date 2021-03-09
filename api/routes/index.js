const express = require('express');
const app = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

app.post('/sign-up', function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const postCustomer = {
      id_user: req.body.id_user,
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: req.body.password,
    };
    const sql = `INSERT INTO users (id_user, pseudo, email, password) VALUES 
    ('${req.body.id_user}','${req.body.pseudo}', '${req.body.email}', '${hash}');`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log('1 record inserted');
      res.send(postCustomer);
    });
  });
});

app.post('/sign-in', function (req, res) {
  db.query(
    `select * FROM users where email =  '${req.body.email}'`,
    function (err, result) {
      if (err) throw err;

      if (!result.length) res.status(203).send('sorry we dont know this user');
      else {
        let pseudo = result[0].pseudo;
        let hash = result[0].password;
        bcrypt.compare(`${req.body.password}`, hash, function (err, resulta) {
          if (resulta) {
            console.log('you are authenticated');
            let token = jwt.sign(
              {user_id: result[0].id_user, user_pseudo: pseudo},
              'clouSecret',
              {expiresIn: '1h'}
            );
            res.status(200).send(token);
          } else {
            res.status(200).send('sorry we dont know this user');
          }
        });
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
      res.send({membres: resu});
    }
  });
});

app.get('/profil', function (req, res) {
  let sql = `SELECT * FROM users WHERE id_user =  '${req.body.id_user}'`;
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/message', function (req, res) {
  let sql = `SELECT * FROM message `;
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
        success: 'succesully deleted',
      });
    }
  );
});

module.exports = app;
