
var prompt = require('prompt-sync')();
let email = prompt("Enter the email-id: ");
function idMail(email){
let emailregex = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
let result = emailregex.test(email);
if(result){
    console.log("This is valid Email Id !.");
}
else{
  console.log("This is unvalid Email Id !.");
}
}

idMail(email);
