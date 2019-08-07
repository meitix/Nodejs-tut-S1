//npm install express --save
//nmp init
//npm install body-parser --save

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get('/mahdi', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/images/image.jpg'));
});


const todosFilePath = path.resolve(__dirname, 'data/todos.json');
app.post('/todos', (req, res) => {
    const todo = { text } = req.body;
    if (!todo) {
        res.status(400).send({ message: 'text is required' })
    }
    //read saved data
    fs.readFile(todosFilePath, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        //add new todo to save data
        data = JSON.parse(data);
        data.push(todo);
        data = JSON.stringify(data);
        //save the new data
        fs.writeFile(todosFilePath, data, err => {
            //send the result to user
            if (err) {
                res.send(500).send(err);
            } else {
                res.send(todo);
            }

        })
    })
})

app.listen('7000');
console.log('app is listening on port 7000');














