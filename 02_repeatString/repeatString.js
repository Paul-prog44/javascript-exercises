const repeatString = function(string, num) {

    if (num < 0) { 
        return "ERROR"

    } else {   
        let longString = ""
        for (let i=0; i<num; i++) {
            longString =longString.concat(string)
        }
        return longString
    }
};

// Do not edit below this line
module.exports = repeatString;
