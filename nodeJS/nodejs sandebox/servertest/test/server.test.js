const {expect} = require('chai');
const server = require('../server.js');
const http = require('http');
const axios = require('axios');

describe('server test', () => {
    /*
* 1. launch server
* 2. make request
* 3. get response
* 4. check response
* 5. stop server
* */
    before((done) => {
        server.listen(3001, done);
    });

    after((done) => {
        server.close(done);
    });

    it('GET request', function (done) {
        const req = http.request('http://localhost:3001', {method: 'GET'}, (res) => {
            const body = [];
            res.on('data', chunk => body.push(chunk));
            res.on('end', () => {
                expect(Buffer.concat(body).toString()).to.equal('HELLO GET');
            });
            done();
        });
        req.end(); // обязательное завершение запроса иначе он будет висетьв памяти и ждать
    });

    it('POST request', async () => {
        // return axios.post('http://localhost:3001', {
        //     message: 'HELLO POST'
        // }).then(response => {
        //     expect(response.data).to.eql({message: 'HELLO POST'});
        // });
        const response = await axios.post('http://localhost:3001', {
                message: 'HELLO POST'
            });
        expect(response.data).to.eql({message: 'HELLO POST'});
    });

    it('PUT request', async () => {
        const response = await axios.put('http://localhost:3001');
        expect(response.data).to.equal('unknown method');
    });
});
