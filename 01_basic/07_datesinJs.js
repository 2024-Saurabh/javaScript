// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)


// let myCreatedDate = new Date(2023, 0, 23) // here it is print date and time (23/1/2023, 12:00:00 am) in this format
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //23/1/2023, 5:03:00 am here date and time we can customized 
 let myCreatedDate = new Date("01-14-2023") //  14/1/2023, 12:00:00 am

// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())


// `${newDate.getDay()}` and the time 

newDate.toLocaleString('default',{
    weekday: "long",
})