const fs = require('fs');

const myPath = './myfile';

function write(path, data, cb) {
    fs.writeFile(path, data, cb);
}

write(myPath, 'world', () => {
    console.log('success');
});


