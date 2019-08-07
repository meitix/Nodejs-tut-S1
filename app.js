
const express = require('express');
const bodyParser = require('body-parser');
const appRouter =require('./routes');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(appRouter);


app.listen('4000');

console.log('app is listening on port 4000');