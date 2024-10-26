let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choiceContainer = document.querySelector("#choice");
const resultContainer = document.querySelector("#result");
const scoreContainer = document.querySelector("#score");
const winnerContainer = document.querySelector("#winner");
const choice = document.createElement("p");
const result = document.createElement("p");
const score = document.createElement("p");
const winner = document.createElement("p");

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

function appendWinner(player) {
    if (player === "human") {
        winner.innerText = `Human player first got to 5 points!`;
        winnerContainer.appendChild(winner);
    } else if (player === "computer") {
        winner.innerText = `Computer player first got to 5 points!`;
        winnerContainer.appendChild(winner);
    } else {
        winner.innerText = ``;
        winnerContainer.appendChild(winner);    
    }
}

function showWinner () {
    if (humanScore === 5) {
        appendWinner("human");
        appendResult("human");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        appendWinner("computer");
        appendResult("computer");
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice) { // Rock beats scissors, scissors beats paper, paper beats rock
    appendWinner();
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
    showWinner();
});

paper.addEventListener("click", () => {
    choice.innerText = "";
    result.innerText = "";
    humanChoice = "PAPER";
    playRound(humanChoice, getComputerChoice());
    showWinner();
});

scissors.addEventListener("click", () => {
    choice.innerText = "";
    result.innerText = "";
    humanChoice = "SCISSORS";
    playRound(humanChoice, getComputerChoice());
    showWinner();
});