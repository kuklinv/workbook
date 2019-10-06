// mocha, chai, sinon
// jasmine, jest, tape
const {expect} = require('chai');
const IncrementStream = require('../IncrementStream');
const sinon = require('sinon');

describe('IncrementStream test suites', () => {
  it('increment stream should increment values', (done) => {
    const inc = new IncrementStream();
    const spy = sinon.spy();
    
    inc.on('data', spy);
    inc.on('end', () => {
      expect(spy.callCount).to.equal(5);
      expect(spy.getCall(0).args[0].toString()).to.equal('2');
      expect(spy.getCall(1).args[0].toString()).to.equal('3');
      expect(spy.getCall(2).args[0].toString()).to.equal('4');
      expect(spy.getCall(3).args[0].toString()).to.equal('5');
      done();
    });
  
    inc.write('1'); // 2
    inc.write('2'); // 3
    inc.write('3'); // 4
    inc.write('4'); // 5
    inc.end();
  });
});
