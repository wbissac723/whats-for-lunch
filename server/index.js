'use strict';

const express = require('express');
const app = express();



const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = server;
