// object literals--->
const mySym = Symbol("key1");

const user = {
    name: "palak",  //key-value pair
    "full name": "palak singh",  //spaces in key
    age: 20,
    isStudent: true,
    location: "India",
    email: "palak@example.com",
    [mySym]: "mykey1"          //symbol as key
};

// console.log(user.email);   // less used way to access value of key
// console.log(user["age"]);
// console.log(user["full name"]);
// console.log(user[mySym]);


user.email = "shiv@example.com";  //updating value of key
// Object.freeze(user);              //freezing the object so that no changes can be made to it
// console.log(user.email);


// adding method---->

user.greet = function() {   //adding a method to the object
   console.log("Hello user");
}

// console.log(user.greet());

