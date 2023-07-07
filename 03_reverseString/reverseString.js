const reverseString = function(str) {
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        revStr = revStr.concat(str.charAt(i).toString());
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
