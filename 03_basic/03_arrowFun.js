const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) 
//In node environment it will give empty object but in browser it will give window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username) //this will not print value of username
// }

// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username) //this will not print value of username
// }



const chai = () => {
    let username = "hitesh"
    console.log(this) //this will print empty object {} in node environment and in browser print window object
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh", age: 18}) // this will complete object


console.log(addTwo(3,4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


