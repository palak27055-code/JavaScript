const heros = ["thor", "ironman", "batman", "spiderman"]
const fake_heros = ["aa", "bb", "cc", "dd"];

// heros.push(fake_heros)
// console.log(heros);  array inside array

let combinedArray = heros.concat(fake_heros)  // both arrays are merged
// console.log(combinedArray);

let spreadArrays = [...heros, ...fake_heros, ] // multiples arrays can be spread here 
// console.log(spreadArrays);


const nums = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // arrays in array
const anotherNums = nums.flat(3)
// console.log(anotherNums);


console.log(Array.isArray("palak"));  // checking if palak is an array
console.log(Array.from("palak"));    // converting it to array 
console.log(Array.from({name: "palak"}));    // [] 

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));
