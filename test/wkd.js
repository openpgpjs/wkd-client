const WKD = require('..');

const chai = require('chai');

const { expect } = chai;

/* eslint-disable no-invalid-this */
describe('WKD unit tests', function() {
  this.timeout(60000);

  let wkd = new WKD();

  describe('lookup', function() {
    it('by email address should work', function() {
      return wkd.lookup({
        email: 'test-wkd@metacode.biz'
      }).then(function(key) {
        expect(key).to.exist;
        expect(key).to.be.an.instanceof(Uint8Array);
      });
    });

    it('by email address should not find a key', function() {
      return wkd.lookup({
        email: 'test-wkd-does-not-exist@metacode.biz'
      }).then(function() {
        throw new Error('Lookup should throw an error');
      }).catch(function(error) {
        expect(error.message).to.equal('Direct WKD lookup failed: Not Found')
      });
    });

    it('by email address should not work on invalid website', function() {
      return wkd.lookup({
        email: 'beep@boop.com'
      }).then(function() {
        throw new Error('Lookup should throw an error');
      }).catch(function(error) {
        expect(error.message).to.equal('Invalid WKD lookup result (text/html Content-Type header)');
      });
    });
  });

});
