/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
// console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
// console.log("Sum:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...more) => {
    let sum = a + b + c;
    for (let i of more) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3, 4, 5, 6);
// console.log("Sum3:", sum3);


// Challenge - Asssign an array to a variable which will contain
// a copy of the array mixedLetters and 6 other letters. Create
// an arrow funciton which should take two parameters.  This function
// should combine all the argument passed in into a single array ad sort 
// them and reverse them and then return this array.

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
// Create a variable named: moreMixedLetters using the keyword let.
// Assign an array to the variable moreMixedLetters which should be a copy
// of the array mixedLetters and then some more values
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
// Log out moreMixedLetters
console.log(moreMixedLetters);
// Create a variable named: updateSortReverse using the keyword const.
// Assign the variable updateSortReverse an arrow function which takes two 
// parameters (arr, letters) using the rest parameter syntax. The function
// should combine all the arguments passed in into a single array and sort
// them and reverse them and then return this array
const updateSortReverse = (arr, ...letters) => {
    let arrLetters = [...arr, ...letters];

    let sortReverseLetters = arrLetters.sort().reverse();
    return sortReverseLetters;
}
// Create a variable named reverseSort using the keyword let
// and assign it the return value from calling the updateSortReverse
// function passing in the moreMixedLetters array and some string values
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
// Log out the variable reverseSort to see its value
console.log(reverseSort);
// Log out the variable mixedLetters to see that it has not been changed
console.log(mixedLetters);


// The above function can be shortened into a one liner like so:
// const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();