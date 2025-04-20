require('dotenv').config();
const path = require('path');
const server = require(path.join(__dirname, 'server', 'server.js'));

module.exports = server;
