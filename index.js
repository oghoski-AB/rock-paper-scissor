const item = ['rock', 'paper' , 'scissor'];
function getComputerChoice (item) {
    return item[Math.floor(Math.random()*item.length)];

}

let playerSelection1 = prompt ("Rock Paper Scissor ? "  );
const playerSelection = playerSelection1.toLowerCase()
const computerSelection = getComputerChoice(item);

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection ){
        let display = "its a tie, Please try again "
        return display
    } 
    else if (playerSelection == item[1] && computerSelection == item[0]) {
        return "you WIN !!!!!! CONGRATULATIONS"

    }
    else if (playerSelection == item [0] && computerSelection == item [1]){
        return "you lose!!!! paper beats rock "
    }
    else if (playerSelection == item [1] && computerSelection == item [2]){
        return "you lose!!! scissors beats paper "
    }
    else if (playerSelection == item [2] && computerSelection == item[1]){
        return "you WIN !!!!!CONGRATULATIONS "
    }
    else if (playerSelection == item [0] && computerSelection == item[2]) {
        return "you WIN !!!!! CONGRATULATIONS "
    }
    else if ( playerSelection == item[2] && computerSelection == item [0]){
        return "you LOSE !! Rock beats paper"
    }
    else {
        return "Wrong input!!! please input Rock , Paper or Scissor"
    }
}
console.log (playRound(playerSelection, computerSelection))
console.log("computer choice is " + getComputerChoice(item))

