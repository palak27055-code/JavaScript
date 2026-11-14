


  














// 1. forEach() METHOD


// forEach() executes a callback function for every array element.
// It does NOT return a new array, so its return value is undefined.

// const coding = ["js", "python", "java", "c++", "ruby"];

// const value = coding.forEach((item) => {
//     console.log(item);  // Prints each item
//     return item;        // Returning item doesn't change forEach's result
// });

// console.log(value);     // undefined



// 2. filter() METHOD


// filter() creates a NEW array containing elements
// that satisfy the given condition.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method 1: Implicit return (without curly braces)
// const newNum = myNums.filter((num) => num > 4);
// console.log(newNum);  // [5, 6, 7, 8, 9, 10]

// Method 2: Explicit return (with curly braces)
// When using {}, we must write the return keyword.

// const newNumbers = myNums.filter((num) => {
//     return num > 4;
// });

// console.log(newNumbers);  // [5, 6, 7, 8, 9, 10]



// 3. Using forEach() instead of filter()


// We can achieve the same result using forEach(),
// but we have to create an empty array and push matching values.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = [];  // Empty array to store filtered values

myNums.forEach((num) => {
    if (num > 4) {          // Check condition
        newNum.push(num);   // Add matching numbers to new array
    }
});

// console.log(newNum);  // [5, 6, 7, 8, 9, 10]



// 4. filter() WITH OBJECTS


// Array of objects (each book has multiple properties)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Example 1: Get all books with genre "History"

// filter() checks each object.
// bk.genre accesses the genre property of the current book.

let userBooks = books.filter((bk) => bk.genre === 'History');


// Example 2: Multiple conditions

// Get books published in or after 1995 AND having genre History.

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History";
// });


// Example 3: Another multiple-condition filter

// Get Fiction books published in or before 2000.

userBooks = books.filter((bk) => {
    return bk.genre === "Fiction" && bk.publish <= 2000;
});

// Display the filtered books
console.log(userBooks);



// QUICK REVISION NOTES


// forEach()  -> Loops through every array element.
// filter()   -> Returns a NEW array based on a condition.
// push()     -> Adds an element to the end of an array.
// return     -> Sends a value back from a function.
// &&         -> Both conditions must be true.
// ||         -> At least one condition must be true.
// ===        -> Checks value AND data type.
// >=         -> Greater than or equal to.
// <=         -> Less than or equal to.
