const number = [2, 5, 10, 20, 100];
const output = [];
for(const numbers of number){
    dubble = numbers * 2;
    // console.log(dubble);
    output.push(dubble);
}

// console.log(output);

function getDubbleIt(number){
    const output = [];
    for(const numbers of number){
    dubble = numbers * 2;
    // console.log(dubble);
    output.push(dubble);
   }
   return output;
}

const result = getDubbleIt(number);
// console.log(result);



// map
const dubbleIt = num => num * 2;

const makeDubble = number.map(dubbleIt);
const makeDubbleDirect = number.map(num => num * 2);
const makeDubble2 = number.map(x => x * 2);

const fiveTime = [1, 2, 3, 4, 5].map(x => x * 2);
console.log(fiveTime);