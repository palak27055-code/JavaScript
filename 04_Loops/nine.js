const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myTotal = myNums.reduce(function (acc, cur_val) {
//     console.log(`acc: ${acc} and cur_val: ${cur_val}`);
//     return acc + cur_val
// }, 0)

const myTotal = myNums.reduce( (acc, cur_val) => acc+cur_val, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 3999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(totalPrice);
