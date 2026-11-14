// 1. reduce() METHOD

// reduce() executes a callback function on every array element.
// It reduces the entire array to a SINGLE value.

// Original array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Method 1: Using a normal function

// const myTotal = myNums.reduce(function (acc, cur_val) {
//     console.log(`acc: ${acc} and cur_val: ${cur_val}`);
//     return acc + cur_val;

// }, 0);  // Initial value of accumulator = 0


//     // acc = Accumulator (stores the previous result)
//     // cur_val = Current value (current array element)


// Method 2: Using an arrow function

const myTotal = myNums.reduce(
    (acc, cur_val) => acc + cur_val,
    0
);

// console.log(myTotal);  // 45



// 2. HOW reduce() WORKS


// Initial accumulator = 0

// acc + cur_val
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21
// 21 + 7 = 28
// 28 + 8 = 36
// 36 + 9 = 45

// Final result = 45



// 3. reduce() WITH OBJECTS


// Shopping cart containing different courses and prices

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 3999
    }
];


// Calculate the total price of all courses

const totalPrice = shoppingCart.reduce(
    (acc, item) => acc + item.price,

    0  // Initial accumulator value
);

// acc = Previous total
// item = Current object in shoppingCart
// item.price = Price of the current course

console.log(totalPrice);  // 8997


// ==========================================
// QUICK REVISION NOTES
// ==========================================

// reduce()       -> Reduces array into a single value.
// acc            -> Accumulator (stores previous result).
// cur_val        -> Current value of the array.
// item.price     -> Accesses price property of an object.
// 0              -> Initial value of accumulator.

// SYNTAX:
// array.reduce((acc, currentValue) => {
//     return acc + currentValue;
// }, initialValue);
