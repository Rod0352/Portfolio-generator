const { rejects } = require('assert');
const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the Promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                // reurn out of the function here to make sure promise doesnt accidentltly execute the resovlve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the seuccesful data to the `.then()` method
            resolve({
                ok: true,
                message: "file created!"
            });
        });
    });
};
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./app.js', fileContent, err => {
            // if theres an error, reject the Promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                // reurn out of the function here to make sure promise doesnt accidentltly execute the resovlve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the seuccesful data to the `.then()` method
            resolve({
                ok: true,
                message: "file copied!"
            });
        });
    });
};
module.exports = {writeFile, copyFile};