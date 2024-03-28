#! /usr/bin/env node
import inquirer from "inquirer";
//current balance
console.log("current balance : $100000");
let myBalance = 100000;
//code for pin
let myPin = 1977;
let pinAns = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code!");
}
else {
    console.log("Incorrect pin code");
}
//code for action
if (pinAns.pin === myPin) {
    let actionAns = await inquirer.prompt([{
            name: "action",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check balance", "fast cash"]
        }]);
    //code for withdraw
    if (actionAns.action === "Withdraw") {
        let withDrawType = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (withDrawType.amount > myBalance) {
            console.log("Please enter valid amount");
        }
        else if (withDrawType.amount < myBalance) {
            console.log(myBalance -= withDrawType.amount);
            console.log(`Your remaining amount is ${myBalance}`);
        }
        else if (withDrawType.amount === myBalance) {
            console.log("You withdraw whole amount");
        }
    }
    // code for fastcash
    if (actionAns.action === "fast cash") {
        let fastCash = await inquirer.prompt([{
                name: "fastcash",
                message: "How much fast cash?",
                type: "list",
                choices: ["$1000", "$500", "$5000"]
            }]);
        if (fastCash.fastcash === "$1000") {
            console.log("Your fastcash has withdraw");
        }
        else if (fastCash.fastcash === "$500") {
            console.log("Your fastcash has withdraw ");
        }
        else if (fastCash.fastcash === "$5000") {
            console.log("Your fastcash has withdraw");
        }
        else {
            console.log("Enter valid value");
        }
        // code for check balance
    }
    else if (actionAns.action === "Check balance") {
        console.log(`Your current amount is $ ${myBalance}`);
    }
}
;
