const http = require('http');

const express = require('express');

const app = new express();

app.use((req, res, next) => {
    console.log('Always  hit middleware');
    next();
});

app.get('/',(req, res, next) => {
    res.send(`
        <h1>Express get api hit!!!</h1>
    `);
});

app.listen(3000);