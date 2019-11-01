const fs = require('fs');

function compareFileSizes(f1, f2, cb) {
    let result;
    fs.stat(f1, (err, stats1) => {
        fs.stat(f2, (err, stats2) => {
            if (stats1.size > stats2.size) {
                result = 1;
            } else if (stats1.size === stats2.size) {
                result = 0;
            } else result = -1;
        });
    });
    cb();
}

// Math.sign

compareFileSizes('./file1', './file2', (_err, result) => console.log(result));

// const myPath = './myfile';
//
// function write(path, data, cb) {
//     fs.writeFile(path, data, cb);
// }
//
// write(myPath, 'world', () => {
//     console.log('success');
// });


