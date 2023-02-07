let min = 1,
    max = 10,
    winningNum = Math.floor((Math.random() * 10) +1);
    guessesLeft = 3;

let game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message"); 

// assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", onClick);

function onClick() {
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess <min || guess >max) {
        message.textContent = `Please enter a number between ${min} and ${max}.`;
        message.style.color = "red";
    } else if(guess === winningNum) {
        message.textContent = "Congrats, you won! The winning number is " + winningNum; 
        message.style.color = "green";
        guessInput.style.borderColor = "green";
        guessInput.disabled = true;
        guessBtn.value = "Play again";
        guessBtn.className += "play-again";
        game.addEventListener("mousedown", playAgain);
    } else {
        message.style.color = "red";
        guessInput.style.borderColor = "red";
        guessesLeft -=1;
        if(guessesLeft === 0) {
            message.textContent = "Game over, you have no more guesses. The correct number was " + winningNum + ".";
            guessInput.disabled = true;
            // play again?
            guessBtn.value = "Play again";
            guessBtn.className += "play-again";
            game.addEventListener("mousedown", playAgain);
        } else {
            if(guessInput.value > winningNum) {
                message.textContent = "Not correct, you have " + guessesLeft + " guesses left. The correct number is lower."
            } else if(guessInput.value < winningNum) {
                message.textContent = "Not correct, you have " + guessesLeft + " guesses left. The correct number is higher."
            }
        }
       } 
    }


function playAgain(e) {
    if(e.target.className === "play-again") {
    window.location.reload()};}