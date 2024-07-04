// 0: Rock
// 1: Paper
// 2: Scissors

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => Math.floor(Math.random() * 3);

let getHumanChoice = () => prompt("Enter 'rock', 'paper' or 'scissors'");