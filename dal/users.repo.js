
const baseRepo = require('./base.repo');

const repo = {
    //create new user.
    create: (credentials, next) => {
        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                db.collection('users').insertOne(credentials, next);
            }
        })
    },
    //find by username.
    findByUsername:(username,next)=>{
        baseRepo.connect((err,db)=>{
            if(err) next(err);
            else db.collection('users').findOne({username},next);
        })
    }
}

module.exports = repo;