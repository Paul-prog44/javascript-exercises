const reverseString = function(string) {
    let reversedArrayString = []
    
    for (const element of string) {
        reversedArrayString.unshift(element)
    }
    return reversedArrayString.join("")
};

// Do not edit below this line
module.exports = reverseString;
