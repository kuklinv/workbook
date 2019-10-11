const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    // this.encoding = options.encoding;
  }

  _transform(chunk, encoding, callback) {

  }

  _flush(callback) {

  }
}

module.exports = LineSplitStream;

