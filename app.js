//setting variables for fizz, buzz and fizzbuzz
var fizzString = "fizz";
var buzzString = "buzz";
var fizzBuzzString = "fizzbuzz";

//setting up fizzbuzz criteria
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

//creating an array of numbers based on the chosen number
function makeFizzBuzzArray(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        result.push(getFizzBuzzValue(getFizzBuzzValue(i)));
    }
    return result;
}

function doFizzBuzz(num) {
    var fizzBuzzArray = makeFizzBuzzArray(num);
    fizzBuzzArray.forEach(function (item) {
        var newElem = $(
            "<div class='fizz-buzz-item><span>' + item + '</span></div>");
        if (item === fizzString || item === buzzString || item === fizzBuzzString) {
            newElem.addClass(item);
        }
        $(".jsResults").append(newElem);
    })
}

function handleFormSubmit() {
    $('#number-chooser').submit(function (event) {
        event.preventDefault();
        //in case there are already results
        $(".js-results").empty();
        var choice = parseInt($(event.currentTarget).find(
            'input[name="number-choice"]').val());
        doFizzBuzz(choice);
    });
}

$(function () {
    handleFormSubmit();
}):
