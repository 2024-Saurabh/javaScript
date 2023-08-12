// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "saurabh"

    function two(){
    const website = "youtube"
    // console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username = "Saurabh"
    if(username === "Saurabh"){
    const website = " youtube "
    // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)


//++++++++++++++++++++interesting+++++++++++++++++++++

// console.log(addone(5)) //this is valid if we not define using variable

function addone(num){
    return num + 1
}

// addTwoNumbers(5)

//if use addTwo() before declaration it will error
const addTwo = function(num){
    return num + 2
}