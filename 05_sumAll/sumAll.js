const sumAll = function (startNumber, finishNumber) {
    if (
        !Number.isInteger(startNumber)
        || !Number.isInteger(finishNumber)
        || startNumber < 0
        || finishNumber < 0
    ) {
        return 'ERROR';
    }

    if (startNumber > finishNumber) {
        startNumber += finishNumber;
        finishNumber = startNumber - finishNumber;
        startNumber -= finishNumber; 
    }

    let sum = 0;
    for (let number = startNumber; number <= finishNumber; number++) {
        sum += number;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
