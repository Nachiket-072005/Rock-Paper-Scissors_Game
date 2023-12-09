let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
let userS = document.querySelector('#user-score');
let compS = document.querySelector('#comp-score');

let p = document.querySelector('#msg');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    let compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userS.innerText = userScore;
        p.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        p.style.backgroundColor = "green";
    } else {
        compScore++;
        compS.innerText = compScore;
        p.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        p.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    p.innerText = "OOPS! Draw Game, Please try again!!";
    p.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});