/*

Practice: Create a Calculator
Instructions
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
1
● Round 23.67891 to 2 decimal places.

===================================================================================================
*/

const readline = require("readline-sync");

// 1. Write a function for each operation listed above using the Math module.

//● Absolute Value Calculation: Given any number, return its absolute value.

function absolutVal(num) {
    return Math.abs(num);
}

//● Power Calculation: Calculate and return the value of a base raised to a specific power.

function powerCal(base, power) {
    return Math.pow(base, power);
}

//● Square Root Finder: Calculate the square root of a number.

function squareRt(num) {
    return Math.sqrt(num);
}

//● Maximum and Minimum Finder: From a given set of numbers, cdetermine the largest and smallest values.

function maxFinder(nums) {
    return Math.max(...nums);
}

function minFinder(nums) {
    return Math.min(...nums);
}

//● Random Number Generator: Generate a random integer within a specified range.

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//● Custom Rounding: Round a number to a specified number of decimal places.

function custRounding(num, decPlaces) {
    return Number(num.toFixed(decPlaces));
}

// 2. Test each function with sample inputs to ensure it works as intended.

//● TEST: Absolute Value Calculation

console.log("\nThe Absolute Value Calculation of -45.67: ");
console.log(absolutVal(-45.67));

//● TEST: Power Calculation

console.log("\nThe Power Calculation with a of Base 5 to the power 3: ");
console.log(powerCal(5, 3));

//● TEST: Square Root Finder

console.log("\nSquare Root of 144: ");
console.log(squareRt(144));

//● TEST: Maximum and Minimum Finder

let nums = [3, 78, -12, 0.5, 27];

console.log(`\nThe Maximum and Minimum Numbers of ${nums} is: \n`);
console.log("The Maximum Number is: ");
console.log(maxFinder(nums));
console.log("The Minimum Number is: ")
console.log(minFinder(nums));

//● TEST: Random Number Generator

console.log("\nA Random Number Between 1 and 50 is: ");
console.log(randomGen(1, 50));

//● TEST: Custom Rounding

console.log("\nThe Number 23.67891 Rounded to 2 Decimal Places is:  ");
console.log(custRounding(23.67891, 2));

// 3. Combine the individual functions into a single "calculator" program where the user can select an operation and input the required values.

console.log("\n****** Calculator ******\n");
console.log("Please choose a Mathmatical Operation:\n");
console.log("1. Absolute Value Calculation");
console.log("2. Power Calculation");
console.log("3. Square Root Finder");
console.log("4. Maximum and Minimum Finder");
console.log("5. Random Number Generator");
console.log("6. Custom Rounding");

let choice = Number(readline.question("Enter your choice, 1-6: "));

if (choice === 1) {
    let num = Number(readline.question("Enter a number: "));

    console.log("You selected: Absolute Value Calculation");
    console.log(`The absolute value of ${num} is:`);
    console.log(absolutVal(num));
}

else if (choice === 2) {
    let base = Number(readline.question("Enter the base number: "));
    let power = Number(readline.question("Enter the power/exponent: "));

    console.log("You selected: Power Calculation");
    console.log(`${base} raised to the power of ${power} is:`);
    console.log(powerCal(base, power));
}

else if (choice === 3) {
    let num = Number(readline.question("Enter a number: "));

    console.log("You selected: Square Root Finder");
    console.log(`The square root of ${num} is:`);
    console.log(squareRt(num));
}

else if (choice === 4) {
    console.log("Enter five numbers.");

    let num1 = Number(readline.question("Enter number 1: "));
    let num2 = Number(readline.question("Enter number 2: "));
    let num3 = Number(readline.question("Enter number 3: "));
    let num4 = Number(readline.question("Enter number 4: "));
    let num5 = Number(readline.question("Enter number 5: "));

    let nums = [num1, num2, num3, num4, num5];

    console.log("You selected: Maximum and Minimum Finder");
    console.log(`The numbers are: ${nums}`);
    console.log("The maximum number is:");
    console.log(maxFinder(nums));
    console.log("The minimum number is:");
    console.log(minFinder(nums));
}

else if (choice === 5) {
    let min = Number(readline.question("Enter the minimum number: "));
    let max = Number(readline.question("Enter the maximum number: "));

    console.log("You selected: Random Number Generator");
    console.log(`A random number between ${min} and ${max} is:`);
    console.log(randomGen(min, max));
}

else if (choice === 6) {
    let num = Number(readline.question("Enter a number to round: "));
    let decPlaces = Number(readline.question("Enter the number of decimal places: "));

    console.log("You selected: Custom Rounding");
    console.log(`${num} rounded to ${decPlaces} decimal places is:`);
    console.log(custRounding(num, decPlaces));
}

else {
    console.log("Invalid choice. Please choose a number between 1 and 6.");
}