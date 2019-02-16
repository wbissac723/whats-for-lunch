'use strict';

const express = require('express');


const router = express.Router();



// TODO create the GET request route to return list of restaurants.

router.get('/', async (req, res) => {

  try {
    res.status(200).send('Still working on route endpoint.');

  } catch (ex) {
    res.status(500).send('Could not locate resource');
  }
});



module.exports = router;
