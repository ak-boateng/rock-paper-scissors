
function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;
  
    for (let round = 1; round <= rounds; round++) {
      console.log(`Round ${round}:`);
  
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      if (result === 'Player wins') {
        playerScore++;
      } else if (result === 'Computer wins') {
        computerScore++;
      }
  
      console.log(`Player chooses ${playerSelection}`);
      console.log(`Computer chooses ${computerSelection}`);
      console.log(`Result: ${result}`);
    }
  
    console.log('Game Over');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Player wins the game!');
    } else if (computerScore > playerScore) {
      console.log('Computer wins the game!');
    } else {
      console.log('It\'s a tie!');
    }
  }
  
  function getPlayerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const input = prompt('Choose rock, paper, or scissors:').toLowerCase();
    if (choices.includes(input)) {
      return input;
    } else {
      return getPlayerChoice();
    }
  }
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'Player wins';
    } else {
      return 'Computer wins';
    }
  }
  
  // Start the game
  game();
  


// function getComputerChoice(){
//     const pick = [ 'Rock' ,'Paper' ,'Scissors']

//     return pick[Math.floor(Math.random() * pick.length)];
// }

// function getPlayerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const input = prompt('Choose rock, paper, or scissors:').toLowerCase();
//     if (choices.includes(input)) {
//       return input;
//     } else {
//       return getPlayerChoice();
//     }
//   }
// function playRound(playerSelection, computerSelection) {
//     if (computerSelection !== playerSelection){
//         return "You Lose! " + computerSelection + " beats " + playerSelection;
//     }
//     else{
//         return "You won"
//     }
// }



// function game(){

//     let playerScore = 0;
//     let computerScore = 0;
//     const rounds = 5;
//     for (let round = 1; round <= rounds; round++){
//         console.log(`Round ${round}:`);
//         const computerSelection = getComputerChoice();
//         const playerSelection = getPlayerChoice();
//         playRound(playerSelection, computerSelection);
//     }
// }


// console.log(game());