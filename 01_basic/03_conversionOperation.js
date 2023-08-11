let score = "hitesh"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) // this will give number beacuse we typecast score but it actually it will not converted in number
//console.log(valueInNumber)  // this will give NaN means Not an Number


//Results when we typecast into a Number 
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


//Results when we typecast into a Boolean
// 1 => true; 0 => false
//"" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// ********************* Operations **************************

let value = 3
let negValue = -value
// console.log(negValue)
// console.log(typeof negValue)


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)


let str1 = "hello"
let str2 = " hitesh"
// console.log(str2)

let str3 = str1 + str2 // concatenation of string 
// console.log(str3)

//console.log("1" + 2);
// console.log(typeof("1" + 2)); // string
// console.log(1 + "2");
// console.log(typeof(1 + "2")); //string
// console.log("1" + 2 + 2); // this is also behave like a string
// console.log(1 + 2 + "2"); //firstly it behaves like number then it behaves like string
// console.log(typeof(1 + 2 + "2")); 
// console.log(1 + "2" + 2)


// console.log((3+4) * 5 % 3);
// first it calculate (3+4) = 7 then 7*5 =  35 then 35%3 = 2

// console.log(+true) // 1
// console.log(typeof(+true))

// console.log(+""); // 0
// console.log(typeof(+""))

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1)
console.log(num2)
console.log(num3)

let getCounter = 100
++getCounter;
console.log(getCounter);
