'use strict';
const chai = require('chai');
const assert = chai.assert;

const { isPrime } = require("../src/prime");

describe("素数判定単体テスト", function () {
    it("Return true when num is 2.", function () {
        const result = isPrime(2);
        assert.isTrue(result);
    });
    it("Return true when num is 3.", function () {
        const result = isPrime(3);
        assert.isTrue(result);
    });
    it("Return true when num is 524287.", function () {
        const result = isPrime(524287);
        assert.isTrue(result);
    });
    it("Return false when num is 4.", function () {
        const result = isPrime(4);
        assert.isFalse(result);
    });
    it("Return false when num is 999999.", function () {
        const result = isPrime(999999);
        assert.isFalse(result);
    });
    it("Returns true when num is less than or equal to 1.", function () {
        const result = isPrime(1);
        assert.isFalse(result);
    });
    it("Returns true if num is a decimal.", function () {
        const result = isPrime(7.7);
        assert.isFalse(result);
    });
    it("Return false when num is NaN.", function () {
        const result = isPrime(NaN);
        assert.isFalse(result);
    });
    it("Return false when num is string.", function () {
        const result = isPrime("3");
        assert.isFalse(result);
    });
});