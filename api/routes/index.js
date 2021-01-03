const express = require('express');
const app = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



module.exports = app;
