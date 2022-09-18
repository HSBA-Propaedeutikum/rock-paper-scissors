
// Counts the score of the user
let userScore = 0;

// Counts the score of the computer
let computerScore = 0;

// All the player and computer choices
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// The span that displays the user score
const USER_SCORE_SPAN = document.getElementById("user-score");

// The span that displays the computer score
const COMPUTER_SCORE_SPAN = document.getElementById("computer-score");

// The score board contains the user and computer score
const SCORE_BOARD_DIV = document.querySelector(".score-board");

// The result display displays the win or lose message.
const RESULT_DISPLAY_P = document.querySelector(".result > p");

// The div of the rock icon.
const ROCK_DIV = document.getElementById("rock");

// The div of the rock icon.
const PAPER_DIV = document.getElementById("paper");

// The div of the rock icon.
const SCISSORS_DIV = document.getElementById("scissors");

// Add event listeners to player icons that 
ROCK_DIV.addEventListener("click", () => playGame(ROCK));
PAPER_DIV.addEventListener("click", () => playGame(PAPER));
SCISSORS_DIV.addEventListener("click", () => playGame(SCISSORS));


/**
 * Function returns randomly one of the choices ROCK, PAPER, SCISSORS.
 * 
 * @returns Randomly return one of the three options.
 */
function computerChoice() {
    let randomNumber = Math.random();
    if(randomNumber < 1/3) {
        return ROCK;
    } else if (randomNumber <2/3) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

/**
 * Handles all cases of a single game
 * 
 * @param playerChoice the players choice for the game.
 */
function playGame(playerChoice) {
    const computerChoiceVar = computerChoice();
    switch(playerChoice + computerChoiceVar) {
        case ROCK + SCISSORS:
        case PAPER + ROCK:
        case SCISSORS + PAPER:    
            handleWin(playerChoice, computerChoiceVar);
            break;
        case SCISSORS + ROCK:
        case ROCK + PAPER:
        case PAPER + SCISSORS:  
            handleLose(playerChoice, computerChoiceVar);
            break;
        default : 
            handleDraw(playerChoice);

    }
}

/**
 * Handles the case that the user wins.
 * 
 * @param {String} playerChoice the players Choice
 * @param {String} computerChoice the computers Choice
 */
function handleWin(playerChoice, computerChoice) {
    userScore++;
    RESULT_DISPLAY_P.innerHTML = `You win, ${playerChoice} beats ${computerChoice}!`
    USER_SCORE_SPAN.innerHTML = userScore;
    let iconDivClassList = document.getElementById(playerChoice).classList;
    iconDivClassList.add("green-glow");
    setTimeout(() => iconDivClassList.remove("green-glow"), 300);
}

/**
 * Handles the case that the computer wins.
 * 
 * @param {String} playerChoice 
 * @param {String} computerChoice 
 */
function handleLose(playerChoice, computerChoice) {
    computerScore++;
    RESULT_DISPLAY_P.innerHTML = `You lose, ${playerChoice} loses to ${computerChoice} :(`
    COMPUTER_SCORE_SPAN.innerHTML = computerScore;
    let iconDivClassList = document.getElementById(playerChoice).classList;
    iconDivClassList.add("red-glow");
    setTimeout(() => iconDivClassList.remove("red-glow"), 300);
}

/**
 * Handles the case that both draw a game.
 * 
 * @param {String} playerChoice 
 */
function handleDraw(playerChoice) {
    RESULT_DISPLAY_P.innerHTML = `Draw, both choose ${playerChoice} :|`
    let iconDivClassList = document.getElementById(playerChoice).classList;
    iconDivClassList.add("gray-glow");
    setTimeout(() => iconDivClassList.remove("gray-glow"), 300);
}