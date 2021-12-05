const fs = require('fs');
const { dirname } = require('path'); 
const appDir = dirname(require.main.filename);

const myDate = new Date();


const writeToFile = (req, res, next) => {
    let log = `Date: ${myDate}, Request method and url: ${req.method}: ${req.url}, Status Code: ${res.statusCode} \n`;
        fs.appendFile(appDir + '/../logFile.log', log, 'utf8', (err) => {
        if (err) {
            console.log(`error happened: ${err}`)
        }}
        
    )
    next()
}


module.exports = writeToFile