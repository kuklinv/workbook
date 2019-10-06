const stream = require('stream');

module.exports = class IncrementStream extends stream.Transform {
  constructor(options) {
    super(options);
    
    this.arr = [1,2,3,4,5,5,6];
  }
  
  _transform(chunk, encoding, callback) {
    const str = +chunk;
    const value = str + 1;
    
    // this.push(value);
    // setTimeout(() => {
      callback(null, value.toString());
    // }, 10);
  }
  
  _flush(callback) {
    this.push(JSON.stringify(this.arr));
    callback();
  }
};
