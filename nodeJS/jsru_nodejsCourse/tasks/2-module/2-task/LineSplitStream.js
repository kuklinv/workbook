const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        const str = chunk.toString();
        let peaceOfStr = '';
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] !== `${os.EOL}`) {
                peaceOfStr += str[i];
            } else {
                this.push(str);
            }
        }
        callback(peaceOfStr);
    }

    _flush(callback) {

    }
}

module.exports = LineSplitStream;

