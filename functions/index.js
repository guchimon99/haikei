const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/v/:id', (req, res) => {
  res.render('pages/user', {id: req.params.id })
})

exports.app = functions.https.onRequest(app);
