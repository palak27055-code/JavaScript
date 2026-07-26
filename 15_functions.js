function sayMyName(){
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

function addTwoNums(num1, num2){       
   let result = num1 + num2; 
   return result;
   console.log("this line will not execute");      // after return nothing will execute.  
}

const output = addTwoNums(4, 9)
// console.log("output: ", output);
    


function loginUserMsg(username){
    if(!username){                                      // !username means if username is not present or undefined or null or empty string
        console.log("please enter a username.");
        return;
    }
    return `${username} just logged in`
}

// another way-->

function loginUserMsg(username = "sam"){                // now if there will be no input then sam will be present by deafault.                
    return `${username} just logged in`
}



// console.log(loginUserMsg("palak"))
console.log(loginUserMsg())                        // undefined 

loginUserMsg()