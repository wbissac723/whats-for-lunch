'use strict';

const express = require('express');
const request = require('request-promise-native')

const router = express.Router();

const bearerToken = 'a63vBF5N-p5D2w05KaYF78UVcBV99NK1P6Z3tyVsWZLGHcSWays53-lnAOsm8e5cy8DtyiPf6q-OW2l6jD4uv7hQ4sDEELTgqXcTNBB7yyV_10WZtBwTE06FiOhWXHYx';



router.get('/', async (req, res) => {

  const options = {

    uri: req.body.url, // yelp search url sent from the client
    headers: {
      'Authorization': 'Bearer ' + bearerToken // api key
    }

  };

  // Sends GET request to the YELP api to retrieve list of restaurants
  request(options)

    .then((data) => {
      const resta = JSON.parse(JSON.stringify(data));

      // Filter out only needed properties from response
      try {
        resta = _.pick(resta, ['total']);
        console.log(resta);

      } catch (ex) {
        console.log('error' + ex);
      }


      res.status(200).send(data);
    })

    .catch((err) => {
      console.log('Call failed: ' + JSON.stringify(err, null, 3));

      res.status(500).send('Unable to locate restaurants.');

    });

});


module.exports = router;
