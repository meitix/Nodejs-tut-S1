
const baseRepo = require('./base.repo');
const mongoDb = require('mongodb');

const repo = {
    create: (todo, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                db.collection('todos').insertOne(todo, next);
            }
        })
    },
    fetchAll: (userId, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                db.collection('todos').find({ userId }).toArray(next);
            }
        })
    },
    delete: (_id, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                const objId = new mongoDb.ObjectID(_id);
                db.collection('todos').deleteOne({ _id: objId }, next);
            }
        })
    },
    update: (_id, todo, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                const objId = new mongoDb.ObjectID(_id);
                db.collection('todos').updateOne({ _id: objId }, { $set: todo }, next);
            }
        })
    },
    //find by id.
    findById: (_id, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                db.collection('todos').findOne({ _id: new mongoDb.ObjectID(_id) }, next);
            }
        })
    }

}

module.exports = repo;