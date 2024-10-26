console.log("Hello world!");

let humanScore = 0;
let computerScore = 0;
let isStart = false;
let humanChoice = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choiceContainer = document.querySelector("#choice");
const resultContainer = document.querySelector("#result");
const result = document.createElement("p");
const choice = document.createElement("p");

// function getHumanChoice() {

// }

function getComputerChoice() {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = Math.floor(Math.random() * 3);
    return computerChoice[randomNum];
}

function appendChoice(humanChoice, computerChoice) {
    choice.innerText = `Human choice is ${humanChoice}. Computer choice is ${computerChoice}.`
    choiceContainer.appendChild(choice);
}

function playRound(humanChoice, computerChoice) {

    // Scenarios where the computer wins
    if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        appendChoice(humanChoice, computerChoice);
        computerScore++;
    }

    if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        appendChoice(humanChoice, computerChoice);
        computerScore++;
    }

    if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        appendChoice(humanChoice, computerChoice);
        computerScore++;
    }

    // Scenarios where the human wins
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
    }

    if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
    }


    if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
    }

    // Draw
    if (humanChoice === computerChoice) {
        choice.innerText = "It's a tie!";
        choiceContainer.appendChild(choice);
    }   

    console.log(`Score -> Human: ${humanScore} points | | | | | Computer: ${computerScore} points`);    
}

// function playGame() {
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     // if (humanScore === 5) {
//     //     console.log("The human reached 5 points first! Human wins.");
//     // } else {
//     //     console.log("The computer reached 5 points first! Computer wins.");
//     // }
// }

// playGame();

rock.addEventListener("click", () => {
    choice.innerText = "";
    humanChoice = "ROCK";
    playRound(humanChoice, getComputerChoice());
});

paper.addEventListener("click", () => {
    choice.innerText = "";
    humanChoice = "PAPER";
    playRound(humanChoice, getComputerChoice());
});

scissors.addEventListener("click", () => {
    choice.innerText = "";
    humanChoice = "SCISSORS";
    playRound(humanChoice, getComputerChoice());
});
