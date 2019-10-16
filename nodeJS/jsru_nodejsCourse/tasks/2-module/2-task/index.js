const LineSplitStream = require('./LineSplitStream');
const os = require('os');

const lines = new LineSplitStream({
    encoding: 'utf-8',
});
// let counter = 1;

function onData(line) {
    console.log(line);
    // console.log(counter);
    // counter += 1;
}

lines.on('data', onData);

lines.write(`первая строка${os.EOL}вторая строка${os.EOL}третья строка`);

lines.end();







