require('dotenv').config();
const path = require('path');
const server = require('./server/server.js');

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
