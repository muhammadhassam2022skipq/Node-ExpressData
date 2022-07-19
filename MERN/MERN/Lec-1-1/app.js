const http = require('http');
const fs = require('fs');
const express = require('express');
const routes = require('./routes');

const app = express();

//const server = http.createServer(routes);

app.use((req, res, next) => {
    console.log('in middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('in middleware 2');
    next();
});

app.listen(3000);