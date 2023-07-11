const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join("");
    let s = 0;
    let e = str.length - 1;

    while(s < e) {
        //console.log(str.charAt(s) + " " + str.charAt(e));
        if(str.charAt(s) == str.charAt(e)) {
            s += 1;
            e -= 1;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
