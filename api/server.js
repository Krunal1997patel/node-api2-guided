const express = require('express');

const hubsRouter = require('../hubs/hubs-router.js');

const server = express();

// server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', hubsRouter);


//http://localhost:4000/api/hubs?limit=3&page=1&sortdir=desc&sortby=name

module.exports = server;