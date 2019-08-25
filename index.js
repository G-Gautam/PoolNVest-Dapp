// server.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
//const api = require('./routes/product.route'); // Imports routes for the products
const server = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://teampool:teampooladmin@ds119523.mlab.com:19523/hackthe6ix';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
//server.use('/api', product);


server.use(express.static('../angular-demo2/src/app'));
let port = 8081;

server.listen(port, process.env.IP,() => {
    console.log('Server is up and running on port number ' + port);
});

