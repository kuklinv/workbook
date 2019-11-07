/////error processing
//
const fs = require('fs');
const {map} = require('async');
const path = require('path');
const _ = require('lodash');

function getDirectorySize () {


    // fs.readdir(dirPath, (error1, files) => {
    //   if (error1) {
    //     cb(error1);
    //     return;
    //   }
    //   let filepaths = files.map(name => path.join(dirPath, name));
    //   async.map(filepaths, fs.stat, (error2, results) => {
    //     if (error2) {
    //       cb(error2);
    //       return;
    //     }
    //     let mapper = results.map(elem => elem.size);
    //     _.sumBy(results, mapper);
    //   });
    // });


// _.sumBy(отфильрованный массив, (item) => item.size)

}

getDirectorySize('/usr/local/bin', (err, size) => {
    console.log(size);
});

// export { getDirectorySize };

// fs.readdir - чтение содержимого директории
// path.join - конструирует пути
// async.map
// fs.stat - информация о файле
// _.sumBy - нахождение суммы в массиве

/// ///////////////////////////////////////////////////////



// const fs = require('fs');
//
// function move(location, destination, cb) {
//     fs.readFile(location, )
// }
//
// // export { move };
//
// move('/opt/myfile', '/tmp/newfile', (error) => {
//     if (error) {
//         console.log('oops');
//         return;
//     }
//     console.log('yes!')
// });
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


