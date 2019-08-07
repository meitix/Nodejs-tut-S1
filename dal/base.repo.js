
const mongoDb = require('mongodb');

let theDB = undefined;
const cs ='mongodb+srv://todoApp:@123qwe@@cluster0-kiej8.mongodb.net/test?retryWrites=true&w=majority' ;
//const cs ='mongodb://localhost:27017/todoApp';
const connect = (next) => {
    if (theDB) {
        next(null, theDB);
        return;
    }
    mongoDb.connect(cs, {useNewUrlParser:true} , (err, client) => {
        if (err) next(err);
        else {
            theDB = client.db();// ابجکت دیتا بیس را برمیگرداند
            next(null, theDB);
        }
    });
}

module.exports.connect = connect;