const fs = require('fs');

const fileIn = fs.createReadStream(__filename, {
  highWaterMark: 100,
});

const fileOut = fs.createWriteStream(__filename + '.out', {
  highWaterMark: 100,
});

fileIn.on('data', (data) => {
  fileOut.write(data);
});

fileIn.on('end', () => {
  fileOut.end();
});
