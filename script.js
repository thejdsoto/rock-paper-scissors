console.log("Hello world!");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choiceContainer = document.querySelector("#choice");
const resultContainer = document.querySelector("#result");
const scoreContainer = document.querySelector("#score");
const choice = document.createElement("p");
const result = document.createElement("p");
const score = document.createElement("p");

function getComputerChoice() {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = Math.floor(Math.random() * 3);
    return computerChoice[randomNum];
}

function appendChoice(humanChoice, computerChoice) {
    choice.innerText = `Human choice is ${humanChoice}. Computer choice is ${computerChoice}.`
    choiceContainer.appendChild(choice);
}

function appendResult(winner) {
    if (winner === "human") {
        result.innerText = `HUMAN WINS!`;
        resultContainer.appendChild(result);
    } else if (winner === "computer") {
        result.innerText = `COMPUTER WINS!`;
        resultContainer.appendChild(result);
    } else {
        result.innerText = `IT'S A TIE!`;
        resultContainer.appendChild(result);       
    }
}

function appendScore(humanScore, computerScore) {
    score.innerText = `Human: ${humanScore} <<<<< S C O R E >>>>> Computer: ${computerScore}`
    scoreContainer.appendChild(score);
}

function playRound(humanChoice, computerChoice) { // Rock beats scissors, scissors beats paper, paper beats rock

    // Scenarios where the computer wins
    if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        appendChoice(humanChoice, computerChoice);
        appendResult("computer");
        computerScore++;
        appendScore(humanScore, computerScore);
    }

    if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        appendChoice(humanChoice, computerChoice);
        computerScore++;
        appendResult("computer");
        appendScore(humanScore, computerScore);
    }

    if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        appendChoice(humanChoice, computerChoice);
        computerScore++;
        appendResult("computer");
        appendScore(humanScore, computerScore);
    }

    // Scenarios where the human wins
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
        appendResult("human");
        appendScore(humanScore, computerScore);
    }

    if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
        appendResult("human");
        appendScore(humanScore, computerScore);
    }

    if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        appendChoice(humanChoice, computerChoice);
        humanScore++;
        appendResult("human");
        appendScore(humanScore, computerScore);
    }

    // Draw
    if (humanChoice === computerChoice) {
        appendChoice(humanChoice, computerChoice);
        appendResult("draw");
        appendScore(humanScore, computerScore);
    }   
}

// Event listeners for buttons
rock.addEventListener("click", () => {
    choice.innerText = "";
    result.innerText = "";
    humanChoice = "ROCK";
    playRound(humanChoice, getComputerChoice());
});

paper.addEventListener("click", () => {
    choice.innerText = "";
    result.innerText = "";
    humanChoice = "PAPER";
    playRound(humanChoice, getComputerChoice());
});

scissors.addEventListener("click", () => {
    choice.innerText = "";
    result.innerText = "";
    humanChoice = "SCISSORS";
    playRound(humanChoice, getComputerChoice());
});
