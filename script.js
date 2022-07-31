// Prompt player for choice
function getPlayerChoice() {
    let playerChoice = prompt("Please enter choice: ");
    // convert player prompt as non case-sensitive
    return playerChoice.toUpperCase();
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

  function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    // Check user versus computer choice
    // Rock beats scissors
    // Scissors beats paper
    // Paper beats rock
    if (playerChoice === "ROCK" && computerChoice === "PAPER") {
      console.log("You lose! Paper beats rock!");
      return 1;
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
      console.log("You win! Rock beats scissors!");
      return 0;
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
      console.log("You win! Paper beats rock!");
      return 0;
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
      console.log("You lose! Scissors beats paper!");
      return 1;
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
      console.log("You lose! Rock beats scissors!");
      return 1;
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
      console.log("You win! Paper beats scissors!");
      return 0;
    } else {
      // Same choices means tie, therefore no winner
      console.log("Draw!");
    }
  }


  function game() {
    // Tally score for winner (if user or computer)
    // Initialize score for user = 0 and computer = 0
    let userScore = 0;
    let computerScore = 0;

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
      whoWins = playRound();
      if (whoWins === 0) {
        // If user wins, userScore =+ 1
        userScore++;
        console.log(userScore);
        console.log(computerScore);
      } else if (whoWins === 1) {
        // If computer wins, computerScore += 1
        computerScore++;
        console.log(userScore);
        console.log(computerScore);
      }
    }
  }

  game();
