const async = require('async');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

let app = express();
let port = 3000;

const git_routes = require('./routes/github')

app.use('/api', git_routes);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});