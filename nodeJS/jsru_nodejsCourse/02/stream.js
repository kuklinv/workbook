// Readable, Writable, Duplex, Transform

const fs = require('fs');

// Readable
// const stream = fs.createReadStream(__filename);
// paused | flowing

// stream.pipe(process.stdout); -- 99%
// stream.on('data', chunk => {}); -- 0.9%
// stream.resume() | stream.pause()

// stream.on('readable', () => { // -- 0.1%
//   const chunk = stream.read();
// });

// 'error'
// stream.on('error', (err) => console.log('EVENT: error', err));

// 'close'
// stream.on('close');

// 'end', 'finish'
// 'open'

// stream.on('open', () => console.log('EVENT: open'));
// stream.on('end', () => console.log('EVENT: end'));
// stream.on('close', () => console.log('EVENT: close'));
// // stream.pipe(process.stdout);
// setTimeout(() => {
//   stream.destroy(new Error('lala'));
// }, 10);

const w = fs.createWriteStream('new.txt');

setTimeout(() => {
  w.write('hello \n');
}, 1000);

setTimeout(() => {
  w.write('world!');
}, 4000);

setTimeout(() => {
  w.end();
}, 5000);

w.on('open', () => console.log('EVENT: open'));
w.on('end', () => console.log('EVENT: end'));
w.on('finish', () => console.log('EVENT: finish'));
w.on('close', () => console.log('EVENT: close'));
