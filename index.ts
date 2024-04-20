#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";

// 1.computer will genrate a random number after that
// 2.user input for guessing number
//3.computer user input with computer genrated number and show result.

//const randomNumber = Math.random();

//const randomNumber = Math.floor(Math.random());

const randomNumber = Math.floor(Math.random() * 6 + 1 );
console.log(randomNumber);

const asnwers = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number: ",
    },
]);

   if(asnwers.userGuessedNumber === randomNumber){
    console.log(`Congtrtulations! You guessed right number.`);
   }else{
    console.log(`You guessed wrong number between 1-6:`);
   };
   