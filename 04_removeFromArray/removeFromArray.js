const removeFromArray = function(array, ...args) {
    const newArray = array.filter((element) => {
        for (elementToRemove of args) {
            if (element === elementToRemove) {
                return false;
            }
        }
        return true;
    });
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
