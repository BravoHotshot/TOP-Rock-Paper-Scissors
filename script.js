// 0: Rock
// 1: Paper
// 2: Scissors

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

let getComputerChoice = () => Math.floor(Math.random() * 3);
let getHumanChoice = () => prompt("Enter 'rock', 'paper' or 'scissors'");

const buttonList = document.querySelector(".buttons");
const message = document.querySelector(".message");

buttonList.addEventListener("click", (event) => {
    let target = event.target;

    if (roundNumber < 5) {
        switch(target.getAttribute("class")) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
    
            case "paper":
                playRound("paper", getComputerChoice());
                break;
    
            case "scissors":
                playRound("Scissors", getComputerChoice());
                break;
        }
         roundNumber++;
    }

    else if (roundNumber == 5) {
        switch(target.getAttribute("class")) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
    
            case "paper":
                playRound("paper", getComputerChoice());
                break;
    
            case "scissors":
                playRound("Scissors", getComputerChoice());
                break;
        }
        message.innerHTML += `<div class="result">${calculateScore()}</div>`;
        roundNumber++;
    }
});

function playRound(humanChoice, computerChoice) {
    let humanChoiceProcessed = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    let humanChoiceNumber, computerChoiceName;

    switch (computerChoice) {
        case 0:
            computerChoiceName = "Rock";
            break;

        case 1:
            computerChoiceName = "Paper";
            break;

        case 2:
            computerChoiceName = "Scissors";
            break;
    }

    switch (humanChoiceProcessed) {
        case "Rock":
            humanChoiceNumber = 0;
            break;

        case "Paper":
            humanChoiceNumber = 1;
            break;

        case "Scissors":
            humanChoiceNumber = 2;
            break;

        default:
            console.log("INVALID CHOICE!!!");
            humanChoice = getHumanChoice();
            return playRound(humanChoice, computerChoice);
    }

    if (humanChoiceNumber === computerChoice) {
        message.textContent = `Both chose ${humanChoiceProcessed}. IT'S A DRAW!`;
    }

    else {
        if (humanChoiceNumber > computerChoice) {
            if (humanChoiceNumber === 2 && computerChoice === 0) {
                computerScore++;
                message.textContent = "You lose, Rock beats Scissors!";
            }

            else {
                humanScore++;
                message.textContent = `You win, ${humanChoiceProcessed} beats ${computerChoiceName}!`;
            }
        }

        else {
            if (humanChoiceNumber === 0 && computerChoice === 2) {
                humanScore++;
                message.textContent = "You win, Rock beats Scissors!";
            }

            else {
                computerScore++;
                message.textContent = `You lose, ${computerChoiceName} beats ${humanChoiceProcessed}!`;
            }
        }
    }
}

function calculateScore() {
    if (humanScore > computerScore) {
        return `User beat computer ${humanScore}-${computerScore}.<div>WINNER: USER</div>`;
    }

    else if (humanScore < computerScore) {
        return `Computer beat user ${computerScore}-${humanScore}.<div>WINNER: COMPUTER</div>`;
    }

    else {
        return `Final score is ${computerScore}-${humanScore}.<div>IT'S A DRAW!</div>`;
    }
}