//==================
// for loop-->
// ==================
for (let i = 0; i <= 10; i++) {
    // const element = i;
    // console.log(element);
    
    // console.log(i);
}
//============================
// coditional statement in loop
//=============================
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

//============================
// loop in loop
//=============================
for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and ${i}`);
        // console.log(i+`*` + j + `=` + i*j);    
    }
}

// ============================
// array in loops 
// ============================
let myArray = ["flash", "superman", "batman", "wonder woman",]
for(let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    // console.log(element);
}