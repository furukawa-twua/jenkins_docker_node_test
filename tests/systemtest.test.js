'use strict';
const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const cheerio = require('cheerio');

// テスト本体
describe('Web システムテスト', async function() {
    it('Access with GET Method return 200.', async function() {
        request.get({url:'http://localhost:3000'}, function(err,response,body){
            assert.equal(response.statusCode, 200); 
        });
    });
    it('"Yes 素数" when input prime:2.', async function() {
        request.get({url:'http://localhost:3000/?prime=2'}, function(err,response,body){
            const $ = cheerio.load(body);
            const yeah = $("#yeah").text();
            assert.equal(yeah, "Yes 素数");
        });       
    });
    it('The character string entered in the input element is displayed.', async function() {
        request.get({url:'http://localhost:3000/?prime=2'}, function(err,response,body){
            const $ = cheerio.load(body);
            const prime = $("#prime").val();
            assert.equal(prime, "2");
        });       
    });
    it('"No 素数" when input prime:0.', async function() {
        request.get({url:'http://localhost:3000/?prime=0'}, function(err,response,body){
            const $ = cheerio.load(body);
            const yeah = $("#yeah").text();
            assert.equal(yeah, "No 素数");
        });       
    });
    it('"No 素数" when input prime:hoge.', async function() {
        request.get({url:'http://localhost:3000/?prime=hoge'}, function(err,response,body){
            const $ = cheerio.load(body);
            const yeah = $("#yeah").text();
            assert.equal(yeah, "No 素数");
        });       
    });
});
