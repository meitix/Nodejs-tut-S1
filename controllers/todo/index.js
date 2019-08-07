const fs = require('fs');
const path = require('path');
const todosFilePath = path.resolve(__dirname, '../../data/todos.json');
const todosRepo = require('../../dal/todos.repo');

const controller = {
    //create todo
    create: (req, res) => {
        const todo = { text } = req.body;
        todo.userId = req.user._id;
        if (!todo) {
            res.status(400).send({ message: 'text is required' })
        }
        //read saved data
        todosRepo.create(todo, (err, result) => {
            if (err) res.status(500).send(err);
            else res.send(result);
        });
    },
    //fetch all todos
    fetchAll: (req, res) => {
        todosRepo.fetchAll(req.user._id, (err, data) => {
            if (err) res.status(500).send(err);
            else res.send(data);
        })
    },
    //delete todo
    delete: (req, res) => {
        const todo = { _id, text } = req.body;
        todosRepo.findById(todo._id, (err, dbTodo) => {
            if (err) res.status(500).send(err);
            else {
                if (dbTodo.userId !== req.user._id) {
                    res.status(403).send({ msg: 'شما اجازه حذف این ایتم را ندارید' });
                } else {
                    //delete todos file
                    todosRepo.delete(todo._id, (err, result) => {
                        if (err) res.status(500).send(err);
                        else res.send(result);
                    })
                }
            }
        })
    },
    //update todo
    update: (req, res) => {
        const todo = { _id, text, isDone } = req.body;
        todosRepo.findById(todo._id, (err, dbTodo) => {
            if (err) res.status(500).send(err);
            else {
                if (dbTodo.userId !== req.user._id) {
                    res.status(403).send({ msg: 'شما اجازه ویرایش این ایتم را ندارید' });
                } else {
                    todosRepo.update(todo._id, { text: todo.text, isDone: todo.isDone }, (err, result) => {
                        if (err) res.status(500).send(err);
                        else res.send(result);
                    });
                }
            }
        })
    }
}


module.exports = controller;