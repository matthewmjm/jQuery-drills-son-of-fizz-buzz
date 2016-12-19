var fizzString = "fizz";
var buzzString = "buzz";
var fizzBuzzString = "fizzbuzz";

function getFizzBuzzValue(num) {
    var val = num;
    if (num % 15 === 0) {
        val = fizzBuzzString;
    } else if (num % 5 === 0) {
        val = buzzString;
    } else if (num % 3 === 0) {
        val = fizzString;
    }
    return val;
}
