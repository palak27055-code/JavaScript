// ===============================
// Truthy and Falsy Values in JavaScript
// ===============================

const userEmail = [];

// Even though the array is empty,
// an empty array ([]) is a TRUTHY value.
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Output:
// Got user email

// ----------------------------------------
// Falsy Values
// These values are treated as false in conditions.
// ----------------------------------------

// false
// 0
// -0
// 0n (BigInt zero)
// "" (Empty string)
// null
// undefined
// NaN

// ----------------------------------------
// Truthy Values
// Everything else is generally truthy.
// ----------------------------------------

// "0"            // String containing 0
// "false"        // String containing false
// " "            // String with a space
// []             // Empty array
// {}             // Empty object
// function(){}   // Function

// ----------------------------------------
// Checking if an array is empty
// ----------------------------------------

// .length returns the number of elements in the array.
// If length is 0, the array is empty.

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Output:
// Array is empty


// ===============================
// Checking if an object is empty
// ===============================

const emptyObj = {};

// Object.keys(object)
// Returns an array containing all the keys of the object.

console.log(Object.keys(emptyObj));
// Output: []

// Since the returned array is empty,
// its length is 0.

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Output:
// Object is empty


// ===============================
// Nullish Coalescing Operator (??)
// ===============================

// The ?? operator returns the first value
// that is NOT null or undefined.

let val1;

// Example 1
// val1 = 5 ?? 10;
// Output: 5
// Because 5 is not null or undefined.

// Example 2
// val1 = null ?? 10;
// Output: 10
// null is ignored, so 10 is returned.

// Example 3
// val1 = undefined ?? 15;
// Output: 15
// undefined is ignored.

// Example 4
val1 = null ?? 10 ?? 20;

// Evaluation:
// null -> ignored
// 10 -> first valid value
// 20 is never checked

console.log(val1);

// Output:
// 10


// ===============================
// Ternary Operator
// ===============================

// Syntax:
// condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100;

// Check if price is less than or equal to 80.
iceTeaPrice <= 80
    ? console.log("less than 80")
    : console.log("more than 80");

// Output:
// more than 80