const number = [20, 30, 40, 50, 100];
const halp = number.map(n => n/2);
const thirds = number.map(n => n/3);
// console.log(halp);
// console.log(thirds);

const friends = ['Arif', 'Nasir', 'Mijan', 'Sohel'];

const friendsFristLatter = friends.map(x => x[2]);
// console.log(friendsFristLatter);

const friendsLangth = friends.map(friends => friends.length);
// console.log(friendsLangth);

const product = [
    {id: 1, name: 'Laptop', price: 2000},
    {id: 2, name: 'Iphone', price: 3000},
    {id: 3, name: 'Watch', price: 6000},
    {id: 4, name: 'Tablet', price: 1000},
]

const productName = product.map(product => product.name);
console.log(productName);