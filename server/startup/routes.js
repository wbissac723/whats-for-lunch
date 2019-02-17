'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Routes
const restaurants = require('../routes/restaurants/restaurants');


module.exports = function(app) {
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api/restaurants', restaurants);
}
