/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
    let stringArray = s.split('');
    let len = stringArray.length;

    for (let i = 0; i < len; i++) {
        if (stringArray[i] !== 'a') {
            let startIndex = i,
                endIndex = i;
            while (endIndex < len && stringArray[endIndex] !== 'a') {
                endIndex++;
            }
            return shiftString(stringArray, startIndex, endIndex).join('');
        }
    }
    stringArray[len - 1] = 'z';
    return stringArray.join('');
};

function shiftString(s, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        s[i] = getPrevLetter(s[i]);
    }
    return s;
}

function getPrevLetter(letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 1);
}

module.exports = smallestString;
