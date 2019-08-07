//npm install express --save
//nmp init
//npm install body-parser --save

const express = require('express');
const bodyParser = require('body-parser');
const appRouter =require('./routes');
const logMiddleware =require('./middlewares/log');
//const repoBase =require('./dal/base.repo');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//repoBase();
app.use(logMiddleware);

app.use(appRouter);



app.listen('7000');
console.log('app is listening on port 7000');














