// EXAMPLE 1----->

let score = 33
let name = "33abc"  // if the value inside name becomes null, then in output you'll get 0 instead of NaN.


console.log(typeof score)
console.log(typeof name)


let valueInNumber = Number(name)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// HENCE--->
// "33" ---> 33
// "33abc" ---> NaN
// true ---> 1; false ---> 0
// undefined ---> NaN
// null ---> 0



// EXAMPLE 2----->

let isLoggedIn = "palak"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// HENCE--->
// 1 --> true
// 0 --> false
// "palak" --> true
// " " ---> false


// EXAMPLE 3----->

let str = 33

let stringNumber = String(str)
console.log(stringNumber)
console.log(typeof stringNumber)
