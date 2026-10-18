// for of --->

// The for...of loop is used to access each value of an array one by one.
let arr = [1, 2, 3,4 ,5 ,6]

for (const num of arr) {
    // console.log(num);  // Prints each number from the array.
}

const greetings = "hello world"

// for...of can also access each character of a string one by one.
for (const letter of greetings) {
    if(letter == " "){
        continue  // Skips the current iteration if the character is a space.
    }
    // console.log(`Each char is ${letter}`);  // Prints each character except spaces.
}


// MAPS--->

// A Map stores data in key-value pairs.
const map = new Map()
map.set('IN', "India")  // set() adds a key-value pair to the Map.
map.set('USA', "United states of America")
map.set('UAE', "United Arab")
// console.log(map);

// Each Map entry contains a key and a value.
// [key, value] uses destructuring to separate both values.
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// OBJECTS --->

// An object stores data in key-value pairs.
const myObject = {
    'game1': 'NFS',
    'game2': 'RBS'   
}

// Object.entries() converts an object's properties into key-value pairs.
// for...of then accesses each pair one by one.
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}