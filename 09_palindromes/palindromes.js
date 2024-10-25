const removePunctuation = function (str) {
    return Array.from(str)
        .filter((ch) => ch.match(/[a-z0-9]/i))
        .reduce((newStr, ch) => newStr + ch, '');
}

const removeWhitespace = function (str) {
    return str.replace(/\s/g,'');
}

const palindromes = function (str) {
    str = removePunctuation(str);
    str = removeWhitespace(str);
    str = str.toLowerCase();

    let startIndex = 0;
    let endIndex = str.length - 1;
    while (startIndex <= endIndex) {
        if (str[startIndex] != str[endIndex]) {
            return false;
        }
        startIndex += 1;
        endIndex -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
