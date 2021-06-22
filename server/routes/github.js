const async = require('async');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');

let github_api = require('../../config/github.config');

const router = express.Router();
router.use(bodyParser.json());

//GET personal user profile
router.get('/user', (req, res) => {
  let authorization = github_api;
  console.log('GET PROFILE');
  axios({
    url: `/user`,
    method: 'get',
    baseURL: 'https://api.github.com',
    headers: {
      'Access-Control-Allow-Origin': 'https://api.github.com',
      'Authorization': authorization
    }
  })
  .then(({ data } = res) => {
    res.send(data);
    console.log('GET request SUCCESS')
  })
  .catch(err => console.log(err));
});

//GET all repos for a public user
router.get('/users/:handle/repos', (req, res) => {
  let user = req.params.handle;
  let authorization = github_api;
  console.log('get repos for PUBLIC user')

  axios({
    url: `/users/${user}/repos`,
    method: 'get',
    baseURL: 'https://api.github.com',
    headers: {
      'Access-Control-Allow-Origin': 'https://api.github.com',
      'Authorization': authorization
    }
  })
  .then(({ data } = res) => {
    res.send(data);
    console.log('GET public user SUCCESS')
  })
  .catch(err => console.log(err));
});

module.exports = router;