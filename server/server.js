const http = require('http');
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const socket = require('socket.io');

const config = require('../config');

const myIo = require('./sockets/io');
const routes = require('./routes/routes');

const app = express();
const server = http.createServer(app);
const io = socket(server);

global.games = {}; // or pass games to modules

myIo(io);

console.log(`Server listening on port ${config.port}`);
server.listen(config.port);

const Handlebars = handlebars.create({
  extname: '.html',
  partialsDir: path.join(__dirname, '..', 'front', 'views', 'partials'),
  defaultLayout: false,
  helpers: {}
});
app.engine('html', Handlebars.engine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '..', 'front', 'views'));
app.use('/public', express.static(path.join(__dirname, '..', 'front', 'public')));

routes(app);

module.exports = server;
