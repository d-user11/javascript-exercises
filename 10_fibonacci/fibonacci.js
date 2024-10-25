const fibonacci = function (nthNbr) {
    if (nthNbr < 0) {
        return 'OOPS';
    }

    if (nthNbr == 0) {
        return 0;
    } else if (nthNbr == 1) {
        return 1;
    } else {
        return fibonacci(nthNbr - 2) + fibonacci(nthNbr - 1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
