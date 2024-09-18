const removeFromArray = function(array, ...args) {
    const newArray = array.filter((element) => !args.includes(element));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
