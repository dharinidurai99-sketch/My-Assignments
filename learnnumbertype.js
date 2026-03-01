let number = 0;

function checkNumberType(num) {
    if (num > 0) {
        return "The number is positive";
    } 
    else if (num < 0) {
        return "The number is negative";
    } 
    else if (num === 0) {
        return "The number is neutral";
    }
}

let result = checkNumberType(number);
console.log(result);

