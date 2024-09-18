const sumAll = function (firtstNumber, secondNumber) {
    if (
        !Number.isInteger(firtstNumber)
        || !Number.isInteger(secondNumber)
        || firtstNumber < 0
        || secondNumber < 0
    ) {
        return 'ERROR';
    }

    let startNumber;
    let finishNumber;
    if (firtstNumber < secondNumber) {
        startNumber = firtstNumber;
        finishNumber = secondNumber;
    } else {
        startNumber = secondNumber;
        finishNumber = firtstNumber;
    }

    let sum = 0;
    for (let number = startNumber; number <= finishNumber; number++) {
        sum += number;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
