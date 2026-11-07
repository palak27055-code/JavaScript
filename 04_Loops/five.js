const coding = ["js", "rb", "py", "java", "cpp"]

// forEach() using normal function
// coding.forEach(function (val) {
//     console.log(val);
// })

// forEach() using arrow function
// coding.forEach((val) => {
//     console.log(val);
// })

// Passing a separate function as callback
// function printMe(item) {
//     console.log(`The name of item is ${item}`);
// }
// coding.forEach(printMe)

// forEach() with item, index and array
coding.forEach((item, index, arr) => {
    // item = current value
    // index = position of item
    // arr = original array
    // console.log(item, index, arr);
})


// forEach() with array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "jv"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

// Accessing object properties using forEach()
myCoding.forEach((item, index, arr) => {
    console.log(item.languageName);
})