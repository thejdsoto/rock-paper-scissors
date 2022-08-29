let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function printScore() {
  document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
  document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;
}

// Get computer choice
function getComputerChoice() {
  // Randomize computer choice from rock, paper, scissors
  // Get random number among 0, 1, ,2
  let value = Math.floor(Math.random() * 3);
  // If random number = 0, then computer choice is rock
  if (value === 0) {
    return "ROCK";
    // If random number = 1, then computer choice is paper
  } else if (value === 1) {
    return "PAPER"
    // If random number = 2, then computer choice is scissors
  } else {
    return "SCISSORS";
  }
}


function displayChoice (playerChoice, computerChoice) {
  if (playerChoice === "ROCK") {
    document.getElementById("player-choice").innerHTML = `<p>Player choice is</p><p> ${playerChoice}</p><img src="rock.jpg" alt="ROCK" width="300" height="300">`;
  } else if (playerChoice === "PAPER") {
    document.getElementById("player-choice").innerHTML = `<p>Player choice is</p><p> ${playerChoice}</p><img src="paper.jpg" alt="PAPER" width="300" height="300">`;
  } else {
    document.getElementById("player-choice").innerHTML = `<p>Player choice is</p><p> ${playerChoice}</p><img src="scissors.jpg" alt="SCISSORS" width="300" height="300">`;
  }

  if (computerChoice === "ROCK") {
    document.getElementById("computer-choice").innerHTML = `<p>Computer choice is</p><p> ${computerChoice}</p></p><img src="rock.jpg" alt="ROCK" width="300" height="300">`;
  } else if (computerChoice === "PAPER") {
    document.getElementById("computer-choice").innerHTML = `<p>Computer choice is</p><p> ${computerChoice}</p><img src="paper.jpg" alt="PAPER" width="300" height="300">`;
  } else {
    document.getElementById("computer-choice").innerHTML = `<p>Computer choice is</p><p> ${computerChoice}</p><img src="scissors.jpg" alt="SCISSORS" width="300" height="300">`;
  }
}

function displayWinner (playerChoice, computerChoice) {
  // Check user versus computer choice
  if (playerChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
    document.getElementById("result").innerHTML = "You lose! Paper beats rock!";
    printScore();
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    playerScore++;
    document.getElementById("result").innerHTML = "You win! Rock beats scissors!";
    printScore();
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    playerScore++;
    document.getElementById("result").innerHTML = "You win! Paper beats rock!";
    printScore();
  } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerScore++;
    document.getElementById("result").innerHTML = "You lose! Scissors beats paper!";
    printScore();
  } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
    computerScore++;
    document.getElementById("result").innerHTML = "You lose! Rock beats scissors!";
    printScore();
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    playerScore++;
    document.getElementById("result").innerHTML = "You win! Paper beats scissors!";
    printScore();
  } else {
    // Same choices means tie, therefore no winner
    document.getElementById("result").innerHTML = "Draw!";
  }
}

function playRound(playerChoice, computerChoice) {
  displayChoice(playerChoice, computerChoice);
  displayWinner(playerChoice, computerChoice);
  checkScore();
}

function checkScore() {
  if (playerScore === 5 && computerScore < 5) {
    document.getElementById("winner").innerHTML = "You got 5 points first. You win!";
    playerScore = 0, computerScore = 0, roundNumber = 0;
    document.getElementById("round-number").innerHTML = `Round #${roundNumber}`;
    printScore();
  } else if (computerScore === 5 && playerScore < 5) {
    document.getElementById("winner").innerHTML = "The computer got 5 points first. You lose!";
    playerScore = 0, computerScore = 0, roundNumber = 0;
    document.getElementById("round-number").innerHTML = `Round #${roundNumber}`;
    printScore();
  }
}

// Prompt player for choice
function getPlayerChoice() {
  //declare querySelector for three choices
  const btn = document.querySelectorAll('button');
  btn.forEach((buttons) => buttons.addEventListener('click', () => {
    playRound(buttons.value, getComputerChoice());
    roundNumber++;
    document.getElementById("round-number").innerHTML = `Round #${roundNumber}`;
    }
  ));
}

getPlayerChoice();
