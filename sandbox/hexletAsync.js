/////error processing
const fs = require('fs');

function move(location, destination, cb) {
    fs.readFile(location, )
}

// export { move };

move('/opt/myfile', '/tmp/newfile', (error) => {
    if (error) {
        console.log('oops');
        return;
    }
    console.log('yes!')
});
// const fs = require('fs');
//
// function compareFileSizes(f1, f2, cb) {
//     let result;
//     fs.stat(f1, (err, stats1) => {
//         fs.stat(f2, (err, stats2) => {
//             const  result = Math.sign(Number(stats1.size - stats2.size));
//             cb(null, result);
//         });
//     });
// }
//
// compareFileSizes('./file1', './file2', (_err, result) => console.log(result));

// const myPath = './myfile';
//
// function write(path, data, cb) {
//     fs.writeFile(path, data, cb);
// }
//
// write(myPath, 'world', () => {
//     console.log('success');
// });


