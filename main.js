function getComputerChoice(){
    const pick = [ 'Rock' ,'Paper' ,'Scissors']

    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
    
    
    if (computerSelection !== playerSelection){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else{
        return "You won"
    }
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));