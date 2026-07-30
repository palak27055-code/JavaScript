// ==================================
// OBJECT AND "this" KEYWORD
// ==================================

// creating an object
const  user = {
    username: "palak",
    price: 999,
    //function or method inside a object
    welcomeMessage: function(){
        // "this" refers to the current object (user)
        console.log(`${this.username}, welcome to website.`);

        // prints the complete current object
        console.log(this); 
    }
}
// calling the function
// user.welcomeMessage();

//changing username
user.username = "shivam"
// user.welcomeMessage()



//In node.js, outside any object, "this" refers to an empty object {}"
//In browser, "this" refers to a window object"
// console.log(this);

// ==================================
// "this" inside a normal function
// ==================================

function chai(){
    let username = "palak"
    //"this" does not refer to local variable
    // this.username is undefined
    console.log(this.username);   
}
// chai()


// ==================================
// function expression example
// ==================================

const one = function(){
    let username = "shivam"
    console.log(this.one);
}
// one()


// ==================================
// ARROW FUNCTION 
// ==================================

const hey = () => {
    let username = "shivam"
    //arrow function don't have their own "this".
    //They use "this" from the surrounding scope.
    console.log(this);
}
hey()
