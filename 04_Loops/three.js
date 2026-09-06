// for of--->
let arr = [1, 2, 3,4 ,5 ,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"

for (const letter of greetings) {
    if(letter == " "){
        continue
    }
    // console.log(`Each char is ${letter}`);
}

// MAPS-->

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UAE', "United Arab")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    'game1': 'NFS',
    'game2': 'RBS'   
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
    
}