const number = [10, 20, 30, 3, 9, 6, 11, 50, 100];
const bigNumber = number.filter(number => number > 20);
const tiny = number.filter(number => number < 20); 
const evenNumber = number.filter(n => n % 2 === 0); 
// console.log(evenNumber);

const product = [
    {id: 1, name: 'Laptop', price: 2000},
    {id: 2, name: 'Iphone', price: 3000},
    {id: 3, name: 'Watch', price: 6000},
    {id: 4, name: 'Tablet', price: 1000},
]

// const expensive = product.filter(product => product.price > 2000);
const expensive = product.filter(product => product.price < 2000);
console.log(expensive);