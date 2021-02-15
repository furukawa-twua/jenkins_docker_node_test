function isPrime (num) {
    if (typeof num !== "number" || isNaN(num) || !Number.isInteger(num) || num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    const loopEnd = Math.sqrt(num) + 1;
    for (let i = 2; i < loopEnd; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = { isPrime };