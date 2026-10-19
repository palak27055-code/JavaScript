const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(`the name of item is ${item}`);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
      console.log(item, index, arr);
})