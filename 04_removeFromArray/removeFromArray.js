const removeFromArray = function(array, ...valuesToRemove) {
    
    for (const valueToBeRemoved of valuesToRemove) {
        for (const value of array) {
            if (valueToBeRemoved === value)
            array.splice(array.indexOf(value), 1)
        }
    }
    return array
        
};

// Do not edit below this line
module.exports = removeFromArray;
