var express = require('express');
var router = express.Router();
const isPrimeFunc = require("../src/prime").isPrime;

/* GET home page. */
router.get('/', function(req, res, next) {
  let prime = req.query.prime;
  let numPrime = Number(prime);
  let showResult = false;
  let isPrime = true;
  if (!prime) {
    showResult = false;
    prime = "";
  } else {
    showResult = true;
    isPrime = isPrimeFunc(numPrime);
  }
  res.render('index', { title: '素数判定', showResult, prime, isPrime });
});

module.exports = router;
