const student = {
    name: 'Kalim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 33,
        physis: 80,
        camestry: 50
    }
}

const marks = student.marks;
const math = student.marks.math;
console.log(math)
const camestry = student['marks']['camestry'];
console.log(camestry);

const subject = 'physis';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);

// function min(nums) { 
// return Math.min(nums) 
// }
// console.log(min( [1,3,2 ]))

// const cube=x=> x*x*x; 
// console.log(cube(2)) 

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

// const product = {
//     name: 'Laptop', 
//     model:'Yoga 3',
//     price:49000, 
//     dusk: '512SSD'
//     }

//     console.log(product.price);