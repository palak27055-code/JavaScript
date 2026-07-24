// const tinderUser = new Object();    // object constructor syntax
const tinderUser = {};                 // object literal syntax or singleton syntax

tinderUser.id = '123abc';
tinderUser.name = 'John';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// nesting in objects--->

const regularUser = {
    email: 'regular@example.com',
    fullName : {
        username : "palak",
        lastname : "singh"
    }
}
// console.log(regularUser["fullName"]["username"]);

// console.log(regularUser.fullName.username);
// console.log(regularUser.fullName?.username);  // ? is used if you are not sure if any key(fullName here) is available her or not.


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign( obj1 , obj2, obj3)    // obj1 is target here
// const obj4 = Object.assign({}, obj1 , obj2, obj3)  // empty array is target here

const obj4 = {...obj1 , ...obj2, ...obj3}  // spread operator
// console.log(obj4);


// database--->

const users = [
    { id: 1, email: 'user1@example.com', name: 'User 1' },
    { id: 2, email: 'user2@example.com', name: 'User 2' },
    { id: 3, email: 'user3@example.com', name: 'User 3' }
]









