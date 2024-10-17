console.log("Hello world!");

/*
Write the logic to get the computer choice.
    Create a new function named getComputerChoice
        - the function will randomly return one of the following string values: "rock", "paper", or "scissors"

Write the logic to get the human choice.
    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    Test what your function returns by using console.log

Declare the players score variables
    Create two new variables named humanScore and computerScore in the global scope
    Initialize those variables with the value of 0

Write the logic to play a single round
    Create a new function named playRound  
    Definte two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    Make your function's humanChoice parameter case-insensitive so that players can input "rock", "ROCK", "RoCK", or other variations.
    Write the code for your playRound function to console.log a string value representing the round winner, such as: "You lose! Paper beats Rock!".
    Increment the humanScore or computerScore variable based on the round winner.

Write the logic to play the entire game
    Create a new function named playGame
    Move your playRound function and score variables so that they are declared inside of the new playGame funtion
    Play 5 rounds by calling playRound 5 times
*/

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    console.log("Computer picks " + computerChoice[randomNum]);
    return computerChoice[randomNum];
}

function getHumanChoice() {
    let humanChoice = prompt("Select: Rock/Paper/Scissors");
    console.log("The human picks " + humanChoice);
    return humanChoice;
}

getHumanChoice();
getComputerChoice();