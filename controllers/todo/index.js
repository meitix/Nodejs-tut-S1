const path = require('path');
const fs = require('fs');


const todosFilePath = path.resolve(__dirname, '../../data/todos.json');

const controller={
    create: (req, res) => {
        const todo = { text } = req.body;
        if (!todo) {
            res.status(400).send({ msg: 'text is required' });
        }
        fs.readFile(todosFilePath, (err, data) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            data = JSON.parse(data);
            data.push(todo);
            data = JSON.stringify(data);
            fs.writeFile(todosFilePath, data, err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(todo);
                }
    
            })
        })
    },
    fetchAll:(req, res) => {
        fs.readFile(todosFilePath, (err, data) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            data = JSON.parse(data);
            res.send(data);
    
        })
    },
    delete:(req, res) => {
        const todo = { text } = req.body;
        fs.readFile(todosFilePath, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                data = JSON.parse(data);
                data = data.filter(d => d.text !== todo.text);
                data = JSON.stringify(data);
                fs.writeFile(todosFilePath, data, err => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.end();
                    }
                })
            }
        })
    },
    update:(req, res) => {
        const oldTodo = { text } = req.body.oldTodo;
        const newTodo = { text } = req.body.newTodo;
        fs.readFile(todosFilePath, (err, data) => {
           
            data = JSON.parse(data);
            data.forEach((t, i) => {
                if (t.text === oldTodo.text) {
                    data[i] = newTodo;
                }
            });
            data = JSON.stringify(data);
            fs.writeFile(todosFilePath, data, err => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.send(newTodo);
            })
        })
    }

}

module.exports=controller;