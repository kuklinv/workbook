const  fs = require('fs');

// event loop

console.log('start');

new Promise(resolve => {
    fs.readFile("__filename", (err, content) => {
        resolve('readFile');
    });
}).then(console.log);

