const fs = require('fs');

function lazyreadfile(path) {
  return {
    run() {
      return new Promise((resolve, reject) => {
        fs.readFile(path, (err, content) => {
          if (err) return reject(err);
          resolve(content);
        });
      });
    }
  }
}

const promise2 = lazyreadfile(__filename);

setTimeout(() => {
  promise2.run().then(console.log);
}, 10000);
