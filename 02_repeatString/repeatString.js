const repeatString = function (string, num) {
    let repeatedString = "";

    if (num < 0) {
        return 'ERROR';
    }
    else
        for (i = 0; i < num; i++) {
            repeatedString = (repeatedString + string);
        }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
