const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Use this for other routes
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom routes




server.use(router); // Use router after defining custom routes
server.listen(5000, () => {
    console.log('JSON Server is running on port 5000');
});
