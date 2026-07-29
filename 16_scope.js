let a = 1
const b = 2
var c = 3

// console.log(a);
// console.log(b);
// console.log(c);


// {} curly braces -->scopes


// problems 
if(true){
    let d =10;
    const e =20;
    var f =30     // it can be redeclared and re-initialized
}

// console.log(d);  // this will throw error as we are trying to access d outside block of if conditionl
// console.log(e);  // this will also throw error as we are trying to access e outside block of if conditionl
// console.log(f);  // this will print 30 and that is a problem, it should not be accessed the block

// note : code written in global scope can be accessed in the block scope but the vice-versa is not true

// note : global scope in console and node js environment (production code) is different


function one(){
    const username = "John";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()
