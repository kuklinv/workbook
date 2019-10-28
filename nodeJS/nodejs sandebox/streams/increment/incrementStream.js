const stream = require('stream');

module.exports = class incrementStream extends stream.Transform {
    constructor(options) {
        super(options);
        this.dataArrayForFlashCb = [1, 2, 3, 4, 5, 6];
    }

    _transform(chunk, encoding, callback) {
        const strChunk = +chunk.toString();
        const transformOut = strChunk + 1;
        // this.push(transformOut); //  for multiply execution
        // callback();
        setTimeout(() => {
            callback(null, transformOut.toString());
        }, 10);

    }

    _flush(callback) {
        // callback(null, this.dataArrayForFlashCb);
        callback(null, JSON.stringify(this.dataArrayForFlashCb));
        // this.push(JSON.stringify(this.dataArrayForFlashCb));
        // callback();
    }

};
