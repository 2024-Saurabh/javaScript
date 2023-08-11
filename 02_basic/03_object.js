// singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"]) // secondways to acccess email fromthe object
// console.log(JsUser["full name"]) // in this case it is neccessary to use this method to access the value of the key
// console.log(JsUser[mySym]) 

// console.log(JsUser)
JsUser.email = "saurabh2000kumar@gmail.com"
// Object.freeze(JsUser) // after this freeze method we can't update any value of the key
// JsUser.email = "amit@gmail.com" // this value not update
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js User")
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser)

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());