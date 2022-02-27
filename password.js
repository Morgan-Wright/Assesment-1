const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome to the Password Validator tool!", function(answer){
    if (answer.length < 10){
        console.log('Password must contain 10 characters.')
    } else {
        console.log(`Password is ${answer.length} characters long!`)
    }
});