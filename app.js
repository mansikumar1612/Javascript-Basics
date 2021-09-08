console.log("MERGED CLASS 1 ES6")

const arr = [1,2,3,4,5]
console.log(arr[2])
const [one,two,three] = arr //ES6 Destructuring
console.log(three)

function getscores() {
    return [90,100]
}
let [x,y,z] = getscores()

console.log(x)
console.log(y)
console.log(z)
//It would be easy to manage ES6 Destructuring.
//when the array is soo huge and we won't be able to remember each inex we use destructuring

// ES6 Destructuring helps us to right the clean code

//object Destructuring

const obj = {
    name: "Mansi",
    email: "mansikumar1612@gmail.com",
    age: 20
}

console.log(obj.email)

let {name,age,email,dum} = obj;
console.log(obj.email)
console.log(obj.age)

//order doesn't matter
//keyname should be equal to the variable name

let person = {
    firstname: "Mansi",
    lastname: "kumar",
    age1: 20 ,
    middlename: "bbb"
}

let {age1,firstname,lastname,middlename=""} = person

console.log(age1)
console.log(firstname)
console.log(lastname)
console.log(middlename)
//If data is there then it will print if data is not there default value will be printed


//ES6 arrow functions

//provide an alternative way to write shorter syntax to write the function.

//function add(x,y)
//{
    //return x+y
//}

//let add = function(x,y) {
    //return x+y;
//}
//console.log(add(10,20))

let add = (x,y) => {
    return x+y;
}
console.log(add(10,20))


const counter = {
    count: 1,//obj
    next: function()//next is method
    {
        return ++(this.count)
    },

key: this,
extra: () => {
    //return --(this.count)
    return --(counter.count)
 }
}

console.log(counter)
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.extra())
console.log(counter)
//this keyword:  Referencing to the object currently being executed

//this keyword can't be use in arrow function
//this keyword refer to the window itself when we use this function with arrow
