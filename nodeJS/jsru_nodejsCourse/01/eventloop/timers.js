const fs = require('fs');

// eventloop
// V8 (JS VM) + libUV (fs, network)

// (macro)tasks queue: [readFile, promise create, ]
// microtasks queue: [queueMicrotask, promise then, ]
// nextTick queue: [nextTick1, nextTick2]

console.log('start'); // 1

fs.readFile(__filename, (err, content) => {
  console.log('readFile'); // 9
});

queueMicrotask(() => {
  console.log('queueMicrotask'); // 6
});

new Promise((resolve) => {
  console.log('promise create'); // 2
  resolve('promise then');
}).then((value) => {
  console.log(value); // 7
});

process.nextTick(() => {
  console.log('nextTick1'); // 4

  process.nextTick(() => {
    console.log('nextTick2'); // 5
  });
});

setImmediate(() => {
  console.log('setImmediate') // 8
});

console.log('end'); // 3
