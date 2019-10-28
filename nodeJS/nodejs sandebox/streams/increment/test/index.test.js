//mocha chai sinon

const incrementStream = require('../incrementStream.js');
const {expect} = require('chai');
// const expect = require('chai').expect;
const sinon = require('sinon');

describe('IncrementStream test', () => {
    it('should increment equal', (done) => {
        const inc = new incrementStream();
        const spy = sinon.spy();
        inc.on('data', spy);  // chunk => console.log(chunk.toString()
        inc.on('end', () => {
            expect(spy.callCount).to.equal(6);
            //console.log((spy.getCall(0).args).toString()); // чтоб посмотреть что за аргументы передаютсья при первом вызове функции
            expect((spy.getCall(0).args).toString()).to.equal('2');
            expect((spy.getCall(1).args).toString()).to.equal('3');
            expect((spy.getCall(2).args).toString()).to.equal('4');
            expect((spy.getCall(3).args).toString()).to.equal('5');
            expect((spy.getCall(4).args).toString()).to.equal('6');
            done();  // need for async waiting timeOut expired in async mocha
        });

        inc.write('1');
        inc.write('2');
        inc.write('3');
        inc.write('4');
        inc.write('5');
        inc.end();

    });
});
