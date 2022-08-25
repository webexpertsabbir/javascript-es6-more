// get user of arry
const user1 = [
    {id: 1, name: 'Sabbir Hossen', job: 'programmer'}
]
// console.log(user1[0].job);


// get data

const data = {
    count: 5000,
    data:[
    {id: 1, name: 'abul', job: 'leader'},
    {id: 2, name: 'babul', job: 'leader'}
    ]
}

const userProftion = data.data[0].job
// console.log(userProftion);

// get flor 

const user = {
    id: 5001,
    name: 'Thomas Alba edition',
    address: {
        street:{
            location: 'dhaka',
            flor: 'thard flor',
            side: 'right side'
        },
        postOffice: 'cantonmaent',
        city: 'Dhaka'
    }
}

const userFlor = user.address.street.flor;

console.log(userFlor);