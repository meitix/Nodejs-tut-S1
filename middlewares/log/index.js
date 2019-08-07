

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
        saveLog(req); 
        next();
    });
}

const saveLog = (req) => {
    fs.readFile(logFilePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                //create empty log file
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