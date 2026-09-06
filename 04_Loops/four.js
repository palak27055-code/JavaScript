const myObject = {
    'g1': 'NFS',
    'g2': 'RBS',   
    'g3': 'BGMI'   
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}