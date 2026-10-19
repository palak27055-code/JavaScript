// Object: Stores data in key-value pairs
const myObject = {
    'g1': 'NFS',
    'g2': 'RBS',
    'g3': 'BGMI'
}

// for...in loop: Iterates over the keys (properties) of an object
for (const key in myObject) {
    // key gives 'g1', 'g2', 'g3'
    // myObject[key] gives the value associated with that key
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// Array: Stores multiple values in an ordered list
const programming = ["js", "rb", "py", "java", "cpp"]

// for...in loop: Iterates over the index (position) of each array element
for (const key in programming) {
    // key gives the index: 0, 1, 2, 3, 4
    // programming[key] gives the value at that index
    // console.log(programming[key]);
}


// Map: Stores data as key-value pairs
const map = new Map()

// set() adds a key-value pair to the Map
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UAE', "United Arab")
map.set('IN', "India") // Duplicate key: updates the existing value; it doesn't add a new entry

// for...in loop: Does not iterate over the entries of a Map
for (const key in map) {
   console.log(key); // No output because Map entries aren't enumerable object properties
}