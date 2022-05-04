var prompt = require('prompt-sync')();
let firstName = prompt("Enter the First Name:");

function fName( firstName ) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let result = nameRegex.test(firstName);
    if(result){
        console.log("This is valid First Name.");
    }
    else{
      console.log("This is unvalid Name.");
    }
}

fName(firstName);