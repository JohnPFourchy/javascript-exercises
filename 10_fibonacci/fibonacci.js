const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }


    let fnum = 1;
    let snum = 1;
    let t = 1;
    for(let i = 0; i < num - 2; i++) {
        t = fnum + snum;
        fnum = snum;
        snum = t;
    }
    return t;
};

// Do not edit below this line
module.exports = fibonacci;
