const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// var accountPassword = "56789"

// let accountEmail = "saurabh2000kumar@gmail.com"
accountEmail = "saurabh2000kumar@gmail.com"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])