// 0: Rock
// 1: Paper
// 2: Scissors

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => Math.floor(Math.random() * 3);
let getHumanChoice = () => prompt("Enter 'rock', 'paper' or 'scissors'");

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
        console.log(`Both chose ${humanChoiceProcessed}. IT'S A DRAW!`);
    }

    else {
        if (humanChoiceNumber > computerChoice) {
            if (humanChoiceNumber === 2 && computerChoice === 0) {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }

            else {
                humanScore++;
                console.log(`You win! ${humanChoiceProcessed} beats ${computerChoiceName}`)
            }
        }

        else {
            if (humanChoiceNumber === 0 && computerChoice === 2) {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }

            else {
                computerScore++;
                console.log(`You lose! ${computerChoiceName} beats ${humanChoiceProcessed}`);
            }
        }
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`User beat computer ${humanScore}-${computerScore}.\n WINNER: USER`);
    }

    else if (humanScore < computerScore) {
        console.log(`Computer beat user ${computerScore}-${humanScore}.\n WINNER: COMPUTER`);
    }

    else {
        console.log(`Final score is ${computerScore}-${humanScore}. IT'S A DRAW!`)
    }
}

// Main

playGame();