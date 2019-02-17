'use strict';

const express = require('express');
const request = require('request-promise-native')

const router = express.Router();

const bearerToken = 'a63vBF5N-p5D2w05KaYF78UVcBV99NK1P6Z3tyVsWZLGHcSWays53-lnAOsm8e5cy8DtyiPf6q-OW2l6jD4uv7hQ4sDEELTgqXcTNBB7yyV_10WZtBwTE06FiOhWXHYx';


router.get('/', async (req, res) => {

  const options = {
      uri: req.body.url,
      headers: {
        'Authorization': 'Bearer ' + bearerToken
      }
  };

  request(options)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Call failed: ' + JSON.stringify(err, null, 3));
      res.status(500).send('Could not locate resource');
    });
});

module.exports = router;
