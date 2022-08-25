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