const http = require('http');
const axios = require('axios');
const {expect} = require('chai');
const server = require('../server');

describe('server tests', () => {
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
  
  it('GET request', (done) => {
    const req = http.request('http://localhost:3001/', {method: 'GET'}, (res) => {
      const body = [];
      res.on('data', chunk => body.push(chunk));
      res.on('end', () => {
        expect(Buffer.concat(body).toString()).to.equal('hello');
        done();
      });
    });
    req.end();
  });
  
  it('POST request', () => {
    return axios.post('http://localhost:3001/', {
      message: 'hello'
    }).then(response => {
      expect(response.data).to.eql({message: 'hello'});
    });
  });
  
  it('PUT request', async () => {
    const response = await axios.put('http://localhost:3001/');
    expect(response.data).to.equal('unknown method');
  });
});
