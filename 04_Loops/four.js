const myObject = {
    'g1': 'NFS',
    'g2': 'RBS',   
    'g3': 'BGMI'   
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UAE', "United Arab")
map.set('IN', "India")

for (const key in map) {
   console.log(key);

}