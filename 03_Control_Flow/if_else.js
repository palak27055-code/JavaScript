// ======================================================
// IF STATEMENT IN JAVASCRIPT
// ======================================================

const isUserLoggedIn = true;

const temperature = 41;

/*
if (temperature === 40) {
    console.log("Temperature is 40");

} else {
    console.log("Temperature is not 40");
}

// This line executes no matter what.
console.log("Program Executed");
*/


// ======================================================
// COMPARISON OPERATORS
// ======================================================

// <   Less than
// >   Greater than
// <=  Less than or equal to
// >=  Greater than or equal to
// ==  Equal (checks only value)
// !=  Not equal
// === Strict equal (checks value + datatype)
// !== Strict not equal


// ======================================================
// BLOCK SCOPE (let)
// ======================================================

/*
const score = 200;

if (score > 100) {
    let power = "fly";

    console.log(`User Power: ${power}`);
}

// This will give an error because 'power'
// is not available outside the if block.

// console.log(power);
*/


// ======================================================
// SINGLE-LINE IF
// ======================================================

/*
const balance = 1000;

// If the condition is true, both statements execute.
// (Using commas like this is possible but not recommended.)

if (balance > 500)
    console.log("Test");
    console.log("Test2");

// Better way:
//
// if (balance > 500) {
//     console.log("Test");
//     console.log("Test2");
// }
*/


// ======================================================
// IF - ELSE IF - ELSE
// ======================================================

/*
const balance = 1000;

if (balance < 500) {
    console.log("Balance is less than 500");

}
else if (balance < 750) {

    console.log("Balance is less than 750");

}
else if (balance < 900) {

    console.log("Balance is less than 900");

}
else {
    console.log("Balance is less than 1200");

}
*/


// ======================================================
// LOGICAL OPERATORS
// ======================================================

const userLoggedIn = true;

const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;


// ======================================================
// LOGICAL AND (&&)
// ======================================================

// && means ALL conditions must be true.

if (userLoggedIn && debitCard && 2 == 3) {

    console.log("Allow to buy course");

}

// Evaluation:
//
// userLoggedIn = true
// debitCard = true
// 2 == 3 = false
//
// true && true && false
// = false
//
// Therefore, nothing is printed.


// ======================================================
// LOGICAL OR (||)
// ======================================================

// || means AT LEAST ONE condition must be true.

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User logged in");

}

// Evaluation:
//
// loggedInFromGoogle = false
// loggedInFromEmail = true
//
// false || true
// = true
//
// Output:
// User logged in