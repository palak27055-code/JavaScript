function sayMyName() {
    let name = ["p", "a", "l", "a", "k"];
    for (const letter of name) {
        console.log(letter);
    }
}
// sayMyName()

// without return --->                             // here the output cannot be stored in new variable 

// function addTwoNums(num1, num2){                // num1 and num2 are parameters
// console.log(num1+num2);
// }
// addTwoNums(3, 4)                                // 3 and 4 are arguments


// with return---->                                // here the output can be stored in new variable 

function addTwoNums(num1, num2) {
    let result = num1 + num2;
    return result;
    console.log("this line will not execute");      // after return nothing will execute.  
}

const output = addTwoNums(4, 9)
// console.log("output: ", output);



function loginUserMsg(username) {
    if (!username) {                                      // !username means if username is not present or undefined or null or empty string
        console.log("please enter a username.");
        return;
    }
    return `${username} just logged in`
}

// another way-->

function loginUserMsg(username = "sam") {                // now if there will be no input then sam will be present by default.                
    return `${username} just logged in`
}

// console.log(loginUserMsg("palak"))
// console.log(loginUserMsg())                        // sam just logged in 



function calculateCartPrice(...num) {                 // ...num means rest operator which will take all the arguments and store them in an array called num
    return num;
}


// functions using Object--->

const user = {
    username: "palak",
    price: 300,
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({
//     username: "Shivam",
//     price: 900,
//     age: 20
// })


// functions using Array-->

const myArray = [70, 89, 90, 67, 56, 87];

function secondElement(getSecond){
    return getSecond[1]
}
console.log(secondElement(myArray))
console.log(secondElement([9, 7, 8, 5, 4]))
