#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer generate a random number - done
// 2) user inpur for gussing number - done
// 3) compair user input with computer generated number and show result
const ramdomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === ramdomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
