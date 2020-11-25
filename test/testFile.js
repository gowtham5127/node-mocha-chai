var expect  = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();
var request = require('request');
 const body = "home page";
 describe('Main & Test Page', function() {
     describe('Main page', function() {
        it('Main page content', function(done) {
            request('http://localhost:3000' , function(error, response, body) {
                console.log(body);
                console.log(error);
                console.log(response.statusCode);
                // expect assertion style in chai
                expect(body).to.equal('home page');
                expect(body).to.lengthOf(9)
        
                // assert assertion style in chai
                assert.notEqual(body, "home page1");
        
                // should assertion style in chai
                body.should.be.a('string');
                done();
            });
        });
     })
     describe('Test page', function() {
        it ('Test page content', function(done) {
            request('http://localhost:3000/test-page', function(error, response, body) {
                console.log(body);
                // assert in chai
                assert.notEqual(body, 'array');
             //   expect(body).to.have.property('data').with.lengthOf(4);
             body.should.be.a('string');
                
            })
        
            done();
        })

     })
    
   
     
 })

