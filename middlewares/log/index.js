

const fs = require('fs');
const path = require('path');

const logDirPath = path.resolve(__dirname, '../../logs');
const logFilePath = logDirPath.concat('/req.json');
module.exports = (req, res, next) => {
    fs.exists(logDirPath, exists => {
        if (!exists) {
            fs.mkdir(logDirPath, err => {
                if (err) {
                    console.log(err);
                }
            });
        }
        saveLog(req); //اینجا در دیت.نوع ارور خوردیم اپ بگا رفت در حالی که اپر لاگ نتونستیم بگیریم نباید بگا بره
        next();
    });
}

const saveLog = (req) => {
    fs.readFile(logFilePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                //create emty log file
                data = '[]';
                try {
                    fs.writeFileSync(logFilePath, data);
                } catch (e) {
                    console.log(e);
                }
            } else {
                console.log(err);
            }
        }
        data = JSON.parse(data);
        data.push({ url: req.baseUrl, headers: req.headers, body: req.body, date: Date.now() });
        data = JSON.stringify(data);
        try {
            fs.writeFileSync(logFilePath, data);
        } catch (e) {
            console.log(e);
        }
    });
}