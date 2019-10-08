const LimitSizeStream = require('../LimitSizeStream');
const LimitExceededError = require('../LimitExceededError');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('2-module-1-task', () => {
    describe('LimitSizeStream', () => {
        it('стрим передает поступающие данные без изменений', (done) => {
            const limitStream = new LimitSizeStream({limit: 3, encoding: 'utf-8'});

            const onData = sinon.spy();

            limitStream.on('data', onData);
            limitStream.on('end', () => {
                expect(onData.calledTwice).to.be.true;
                expect(onData.firstCall.args[0]).to.equal('a');
                expect(onData.secondCall.args[0]).to.equal('b');

                done();
            });

            limitStream.write('a');
            limitStream.write('b');
            limitStream.end();
        });

        it('при превышении лимита выбрасывается ошибка', (done) => {
            const limitStream = new LimitSizeStream({limit: 1});

            const onData = sinon.spy();

            limitStream.on('data', onData);
            limitStream.on('error', (err) => {
                expect(err).to.be.instanceOf(LimitExceededError);
                expect(onData.calledOnce).to.be.true;

                done();
            });

            limitStream.write('a');
            limitStream.write('b');
        });
    });
});

const isPrime = (num) => {
    if (num <= 1) {return false;}
    const iter = (counter, prime) => {
        if (counter === num) {
            return true;
        }
        if (prime % counter === 0) {
            return false;
        }
        return iter(counter + 1, prime);
    };
    return iter(2, num);
};

function result(x1, y1, x2, y2) {
    let print = '';
    for (let i = x1; i < y1; i += 1) {
        if (isPrime(i)) {
            print += i.toString() + ' ';
        }
    }
    console.log(print.slice(0, -1));
}s