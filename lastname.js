var prompt = require('prompt-sync')();
let lastName = prompt("Enter the Last Name:");

function lName( lastName ) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let result = nameRegex.test(lastName);
    if(result){
        console.log("This is valid Last Name!");
    }
    else{
      console.log("This is unvalid Last Name!");
    }
}
lName(lastName);