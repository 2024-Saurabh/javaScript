// In stack memory primitive data is stored 
 let name = "Saurabh"
 let newName = name

 newName = "Amit"

//  console.log(name)
//  console.log(newName)

 // basically newName and name have different memory block have different copy 


 // In heap memory non primitive data is stored 

 let obj = {
    name: "Saurabh",
    email: "saurabh@google.com"
 }

 let obj1 = obj // here referenece of variable is created rather then copy of variable

//  console.log(obj1.email)

obj1.email = "amit@google.com" // this changes also reflect in obj 

 console.log(obj.email) // 

 //