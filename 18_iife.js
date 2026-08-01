//==============================================
//IMEDIATIATELY INVOKED FUNCTION EXPRESSION--
//==============================================
// IIFE is a JavaScript function that is defined and executed immediately after it is created.

//-----------------------------------------------------
// 1. Normal Function
//-----------------------------------------------------

function chai(){
    console.log(`hello js`);
}
chai();


//-----------------------------------------------------
// 2. Named IIFE
//-----------------------------------------------------
// This function is created and immediately executed.
// It does not require a separate function call.

(function chai() {
    console.log("Hi JS");
})();       // Semicolon is important to end the IIFE.


//-----------------------------------------------------
// 3. Arrow Function IIFE
//-----------------------------------------------------
// IIFE using an arrow function.

(() => {
    console.log(`conneted`);
})();


//-----------------------------------------------------
// 4. IIFE with Parameters
//-----------------------------------------------------
// Passing arguments while invoking the function immediately.

((name) => {
    console.log(`hii buddy, i'm ${name}`);
})("palak");
