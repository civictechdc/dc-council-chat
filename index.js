const port = process.env.PORT || 2015;
const path = require('path');

const helmet = require('helmet');
const express = require('express');
const app = express();

/*
 * Web app
*/

// Middleware
app
    .use(express.static(path.join(__dirname, 'public')))
    .use(helmet());

/*
 * Routes
*/
app.use('/', require('./routes/main'));

const server = app.listen(port, function() {
  console.log('Listening on port:', port);
});