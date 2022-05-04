var prompt = require('prompt-sync')();
let phoneNumber = prompt("Enter the Mobile Number:");
function pNumber(phoneNumber){
    let pNumberRegex = RegExp('^(0|91)?[6-9]{1}[0-9]{9}$');
    let result = pNumberRegex.test(phoneNumber);
    if(result){
        console.log("Phone Number is Correct!")
    }
    else{
        console.log("Phone Number is Incoorect!");
    }

}
pNumber(phoneNumber);