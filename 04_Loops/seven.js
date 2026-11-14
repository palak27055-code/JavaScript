// 1. map() METHOD


// map() creates a NEW array by transforming
// each element of the original array.

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add 10 to every number.

// const newNums = myNumbers.map((num) => {
//     return num + 10;
// });

// console.log(newNums);



// 2. METHOD CHAINING


// Method chaining means using multiple array methods
// one after another on the same array.

// Original array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
// Display final array
console.log(newNums);

// OUTPUT:
// [41, 51, 61, 71, 81, 91, 101]


// ==========================================
// QUICK REVISION
// ==========================================

// map()    -> Transforms every element.
// filter() -> Selects elements based on a condition.
// Chaining -> Using multiple methods one after another.

// IMPORTANT:
// map() returns a new array.
// filter() returns a new array.
// Both can be chained together.
