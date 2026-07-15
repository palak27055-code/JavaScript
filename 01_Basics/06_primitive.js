// int--->

let balance =120
let anotherBalance = new Number(120) // number object(not a good practice to use number object)
console.log(balance);
console.log(anotherBalance);

console.log(typeof balance); // number
console.log(typeof anotherBalance); // object


// Boolean---->

let isLoggedIn = true
let anotherIsLoggedIn = new Boolean(true) // boolean object(not a good practice to use boolean object)



// null and undefined--->

let firstName = null
let lastName = undefined
// console.log(firstName);
// console.log(lastName);



// string--->

let string = "hello" //most used 
let string1 = 'palak' 
let username = "shivam"

let oldGreet = string + string1
console.log(oldGreet); // problem -> no space between the strings.

let newGreet = `${string} ${string1} and ${username}`
console.log(newGreet); // no need to write + or spaces, just use ${}.

let add = `value is ${8 + 6}`
console.log(add);


// Symbol--->

let s1 = Symbol("palak")
let s2 = Symbol("shivam")
console.log(s1 == s2); // false, symbol -> unique value.







