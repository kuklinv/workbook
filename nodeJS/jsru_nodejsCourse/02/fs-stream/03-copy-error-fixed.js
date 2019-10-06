const fs = require('fs');
const zlib = require('zlib');
const stream = require('stream');
const promisify = require('util').promisify;

const fileIn = fs.createReadStream(__filename, {highWaterMark: 100});
const gzip = zlib.createGzip();
const fileOut = fs.createWriteStream(__filename + '.gz');

// fileIn.pipe(gzip).pipe(fileOut);

// 1.
// fileIn
//   .on('error', cleanup)
//   .pipe(gzip)
//   .on('error', cleanup)
//   .pipe(fileOut)
//   .on('error', cleanup);

// 2.
// stream.pipeline(
//   fileIn, gzip, fileOut,
//   (err) => {
//     if (err) cleanup();
//     else console.log('done');
//   }
// );

const pipeline = promisify(stream.pipeline);

pipeline(fileIn, gzip, fileOut)
  .then(() => console.log('done'))
  .catch(err => cleanup());

function cleanup() {
  fs.unlink(fileOut.path, (err) => {
    if (err && err.code == 'ENOENT') {
      /* it's ok if no such file, ignore the error */
    } else if (err) {
      throw err;
    }
  });

  // close both files (otherwise won't be closed! no close event!)
  fileIn.destroy();
  fileOut.destroy();
}
