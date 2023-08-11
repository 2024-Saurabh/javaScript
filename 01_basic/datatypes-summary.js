// Primitive

// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 35784829273363774n

console.log(typeof score) //Number
console.log(typeof scoreValue) // Number
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail) //undefined
console.log(typeof id) // symbol
console.log(typeof anotherId) //symbol
console.log(typeof bigNumber) //bigInt



// Rference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof myFunction); //function