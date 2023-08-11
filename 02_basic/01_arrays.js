// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2])
const myHeros = ["shaktiman", "naagraz", ]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[3]); // indixing start from 1


//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(0) // here value added  at index 0
// console.log(myArr) 
// myArr.shift() // here remove the value from first index
// console.log(myArr)

// console.log(myArr.includes(9)); //this statement will give answer in true & false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // jooin convert objects into the string

// console.log(myArr)
// console.log(newArr) 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // this will print value from index 1 to index 2 value of index 3 is excluded

console.log(myn1)
console.log("B ", myArr);


const myn2 = myArr.splice(1,3) // this will include the range value
console.log("C ", myArr);
console.log(myn2);
 

// Main difference between slice and splice is that splice will manipulate the actual array but slice is not actual array 


