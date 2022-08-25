const number = [10, 20, 30, 3, 9, 6, 11, 50, 100];

// map get fist one
const five = number.find( number => number % 5 === 0);
// console.log(five);

// filter get all
const fiveAll = number.filter(n => n % 5 === 0 );
// console.log(fiveAll);

const product = [
    {id: 1, name: 'Laptop', price: 2000},
    {id: 2, name: 'Iphone', price: 3000},
    {id: 3, name: 'Watch', price: 6000},
    {id: 4, name: 'Tablet', price: 1000},
]

const cheap = product.find(p => p.price < 3000);
console.log(cheap);