const sumAll = function(enterInt, exitInt) {
let sum = 0

if  (typeof enterInt !== "number" || typeof exitInt !== "number" ) {
    return "ERROR"
} else {
    if (enterInt < 0  || exitInt < 0) {
        return "ERROR"
    } else {
        if (enterInt < exitInt) {
            for (let i = enterInt; i <= exitInt; i++) {
                sum += i
            }
            
            } else if (enterInt > exitInt ) {
                for (let i = exitInt; i <= enterInt; i++) {
                    sum += i
                }

            }
            return sum
        };
    }
}

// Do not edit below this line
module.exports = sumAll;
