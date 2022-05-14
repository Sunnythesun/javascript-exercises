const removeFromArray = function () {

    let argArray = Array.from(arguments);
    let array = argArray[0];

    for (i = 1; i < argArray.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (argArray[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
