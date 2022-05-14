const palindromes = function (string) {

    processedString = string.toLowerCase();
    processedString = processedString.replace(/[^a-z]/g, "");

    let stringString = processedString;

    processedString = processedString.split("");
    processedString = processedString.reverse();
    processedString = processedString.join("");

    if (stringString === processedString) {
        return true;
    }
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
