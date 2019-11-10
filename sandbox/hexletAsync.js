// timers
const fs = require('fs');

const filepath = './data/timerFile.txt';

function watch(file, interval, cb) {
    let now = Date.now();
    let id = setInterval(()=>{
        fs.stat(file, (err, stats) => {
            if(err) {
                clearInterval(id);
                cb(err);
            }
            let lastMod = stats.mtimeMs;
            // console.log(lastMod);
            // console.log(now);
            // console.log(id);
            if(lastMod > now) {
                clearInterval(id);
                // cb(null);
            }
            // console.log('was modified');
        });
    }, interval);
    cb(null);
    return id;
}

const id = watch(filepath, 500, (err) => {
    console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);

//Реализуйте эту логику используя функцию setInterval. Функция должна возвращать наружу идентификатор таймера.
// Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и вызвать колбек,
// передав туда ошибку.
// stats.mtimeMs — время последнего изменения
// Date.now() — текущая дата
// clearInterval

/////////////////////////////////////////////////////////////////
// const fs = require('fs');
// const asyncmap = require('async').map;
// const path = require('path');
// const _ = require('lodash');

// function getDirectorySize (dirPath, cb) {
//   fs.readdir(dirPath, (error1, files) => {
//     if (error1) {
//       cb(error1);
//       return;
//     }
//     let filepaths = files.map(name => path.join(dirPath, name));
//     asyncmap(filepaths, fs.stat, (error2, dirElems) => {
//       if (error2) {
//         cb(error2);
//         return;
//       }
//       let filteredMapp = dirElems.filter(elem => elem.isFile());
//         let sizeArr = filteredMapp.map(elem => elem.size);
//       let end = _.sumBy(sizeArr);
//       cb(null, end);
//     });
//   });
// }

// getDirectorySize('./opt', (err, size) => {
//   console.log(size);
// });

// export { getDirectorySize };

// fs.readdir - чтение содержимого директории
// path.join - конструирует пути
// async.map
// fs.stat - информация о файле
// _.sumBy - нахождение суммы в массиве

/// //////////////////////////////////////////////////////////////
// const fs = require('fs');

// const move = (location, destination, cb) => {
//   fs.readFile(location, 'utf-8', (error1, data) => {
//     if(error1) {
//       cb(error1)
//       return;
//     }
//     console.log(data);
//     fs.writeFile(destination, data, 'utf-8', (error2) => {
//       if(error2) {
//         cb(error2);
//         return;
//       }
//       fs.unlink(location, (error3) => {
//         if(error3){
//           cb(error3);
//           return;
//         }
//         cb(null);
//       });
//     });
//   });
// }

// // export { move };

// move('/opt/myfile', '/tmp/newfile', (error) => {
//   if (error) {
//     console.log('oops');
//     return;
//   }
//   console.log('yes!')
// });

/////error processing
//
// const fs = require('fs');
// const {map} = require('async');
// const path = require('path');
// const _ = require('lodash');
//
// function getDirectorySize () {


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

// }
//
// getDirectorySize('/usr/local/bin', (err, size) => {
//     console.log(size);
// });

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


