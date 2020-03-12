const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/index');


// create our Express app
const app = express();



// done! we export it so we can start the site in start.js
module.exports = app;
