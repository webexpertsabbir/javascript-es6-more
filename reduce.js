const number = [1, 2, 3, 4, 5];
// const total = number.reduce((previus, carent) => previus + carent, 0);
const total = number.reduce((previus, carent) => {
    console.log(previus, carent);
    return previus + carent ;
    }, 0);
console.log(total);
