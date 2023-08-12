function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName  //with parenthese it is reference of function

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Saurabh") //this is reachable because it is before the return statement 
    // return result
    // console.log("Saurabh")  // this will not execute because it is after the return statement

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result)


function loginUserMessage(usrename = "sam"){   //sam is default argument
    // if(usrename === undefined){
    //     console.log("Please enter a usrename")
    //     return

    // }

    if(!usrename){
        console.log("Please enter a usrename")
        return

     }
    return `${usrename} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    // ...num1 this is 3dot is rest operator in which number if pass any number of argument it will return in the form of array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice2(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice2(200, 400, 500, 6999))
// here 200 is val1 & 400 is val2


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

// handleObject(user)
handleObject({
    username: "arjun",
    prices: 350
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 100, 600]))
