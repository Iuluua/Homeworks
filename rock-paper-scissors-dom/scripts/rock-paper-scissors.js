let computerScore = 0;
let userScore = 0;

//Get game views
const userChoice = document.querySelector(".user-choice");
const gameBody = document.querySelector(".game-body");

//Get start and try again buttons
const startGameButton = document.querySelector(".start-game-button");
const tryAgainButton = document.querySelector(".try-again-button");

//Start game button functionality
function startGame() {
    userChoice.style.display = "block";
    startGameButton.style.display = "none";
}

//Try again button functionality
function tryAgain() {
    gameBody.style.display = "none";
    userChoice.style.display = "block";
}

//Getting user's choice by adding event listeners on each image
function userClickedRock() {
    const gamePossibilities = ["Rock", "Paper", "Scissors"];

    const userTurn = "Rock";
    const computerTurn = gamePossibilities[Math.floor(Math.random() * gamePossibilities.length)];

    play(userTurn, computerTurn);

    gameBody.style.display = "block";
    userChoice.style.display = "none";
}
const rockImage = document.getElementById("rockImage");
rockImage.addEventListener("click", userClickedRock);


function userClickedPaper() {
    const gamePossibilities = ["Rock", "Paper", "Scissors"];

    const userTurn = "Paper";
    const computerTurn = gamePossibilities[Math.floor(Math.random() * gamePossibilities.length)];

    play(userTurn, computerTurn);

    gameBody.style.display = "block";
    userChoice.style.display = "none";
}
const paperImage = document.getElementById("paperImage");
paperImage.addEventListener("click", userClickedPaper);


function userClickedScissors() {
    const gamePossibilities = ["Rock", "Paper", "Scissors"];

    const userTurn = "Scissors";
    const computerTurn = gamePossibilities[Math.floor(Math.random() * gamePossibilities.length)];

    play(userTurn, computerTurn);

    gameBody.style.display = "block";
    userChoice.style.display = "none";
}
const scissorsImage = document.getElementById("scissorsImage");
scissorsImage.addEventListener("click", userClickedScissors);

//Reducing userClickedRock, userClickedPaper, userClickedScissors into one function 
// function userChoices(userTurn) {
//     const gamePossibilities = ["Rock", "Paper", "Scissors"];

//     const computerTurn = gamePossibilities[Math.floor(Math.random() * gamePossibilities.length)];

//     play(userTurn, computerTurn);

//     gameBody.style.display = "block";
//     userChoice.style.display = "none";
// }

// const rockImage = document.getElementById("rockImage");
// rockImage.addEventListener("click", userChoices("Rock"));

// const paperImage = document.getElementById("paperImage");
// paperImage.addEventListener("click", userChoices("Paper"));

// const scissorsImage = document.getElementById("scissorsImage");
// scissorsImage.addEventListener("click", userChoices("Scissors"));


//Add an image and some text for the choice of each player
const userTurnImage = document.querySelector(".players-container .user-container img");
const userTurnText = document.querySelector(".players-container .user-container h3");

function setUserChoice(userTurn, userTurnImage, userTurnText) {
    if (userTurn === "Rock") {
        userTurnImage.setAttribute("src", "images/rock-img.png");
        userTurnText.innerText = "You chose: Rock";

    } else if (userTurn === "Paper") {
        userTurnImage.setAttribute("src", "images/paper-img.png");
        userTurnText.innerText = "You chose: Paper";

    } else {
        userTurnImage.setAttribute("src", "images/scissors-img.png");
        userTurnText.innerText = "You chose: Scissors";
    }
}

const computerTurnImage = document.querySelector(".players-container .computer-container img");
const computerTurnText = document.querySelector(".players-container .computer-container h3");

function setComputerChoice(computerTurn, computerTurnImage, computerTurnText) {
    if (computerTurn === "Rock") {
        computerTurnImage.setAttribute("src", "images/rock-img.png");
        computerTurnText.innerText = "Computer chose: Rock";

    } else if (computerTurn === "Paper") {
        computerTurnImage.setAttribute("src", "images/paper-img.png");
        computerTurnText.innerText = "Computer chose: Paper";

    } else {
        computerTurnImage.setAttribute("src", "images/scissors-img.png");
        computerTurnText.innerText = "Computer chose: Scissors";
    }
}


//Display the score
const computerScoreParagraph = document.querySelector(".computer-container p");
const userScoreParagraph = document.querySelector(".user-container p");

function displayScore(computerScore, computerScoreParagraph) {
    computerScoreParagraph.innerText = `${computerScore}`;
    userScoreParagraph.innerText = `${userScore}|`;
}

//Display the winner
const winnerMessage = document.querySelector("h1");

function displayWinner(winner, winnerMessage) {
    winnerMessage.innerText = `The winner is: ${winner}!`;
}

function play(userTurn, computerTurn) {
    let winner;
    const hasComputerWon = (computerTurn === "Rock" && userTurn === "Scissors") ||
        (computerTurn === "Paper" && userTurn === "Rock") ||
        (computerTurn === "Scissors" && userTurn === "Paper");

    if (computerTurn === userTurn)
        winner = "Nobody, Tie";

    else if (hasComputerWon) {
        winner = "Computer";
        computerScore++;
    }

    else {
        winner = "You";
        userScore++;
    }

    setUserChoice(userTurn, userTurnImage, userTurnText);
    setComputerChoice(computerTurn, computerTurnImage, computerTurnText);

    displayScore(computerScore, computerScoreParagraph);

    displayWinner(winner, winnerMessage);
}