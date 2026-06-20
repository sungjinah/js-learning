const accountId = 1338223
let accountEmail = "sanjana@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
// accountId = 2 we cannot changed const

let accountState;

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId)

accountEmail = "sanjanapatil@s.com"

accountPassword = "21212121"

accountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

