const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessArea")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")

const startOver = document.querySelector(".result")
const lowOrHi = document.querySelector(".lowOrHi")

let previousGuesses = [];
let numOfGuesses = 0

let randomNumber = parseInt(Math.random()*100 +1);
let MaxGuesses = 10

submit.addEventListener("click",function(e){
    e.preventDefault();

    const guess = parseInt(userInput.value)
    validateGuess(guess)
})

function validateGuess(guess){
    previousGuesses.push(guess)


if(previousGuesses.length === MaxGuesses){
    displayGuesses(guess);
    displayMsg(`Game Over! Number was ${randomNumber}`);
    endGame()
}else{
    displayGuesses(guess)
    checkGuess(guess)
}
}

function displayGuesses(guess){
    guessSlot.innerHTML += ` ${guess}`;

    userInput.value = "";
    numOfGuesses++

    let remainingGuesses = MaxGuesses - numOfGuesses;

    if(remainingGuesses < 0){
        remainingGuesses = 0;
    }
    remaining.innerHTML = remainingGuesses
}
function displayMsg(message){
    lowOrHi.innerHTML = `<h1> ${message} </h1`
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg("You Guess Correctly")
        endGame()
    }else if(guess < randomNumber){
        displayMsg("Too Low! Try a higher number")
    }else{
        displayMsg("Too high! try a lower number")
    }
}
const pE1 = document.createElement("p");
function endGame(){
    userInput.value = "";
    pE1.classList.add("button");
    pE1.style.cursor = "pointer";
    pE1.innerHTML = `<h1 onclick="newGame()" id = "newGame"> Start New Game </h1>`;
    pE1.style.backgroundColor = "blue"

    startOver.append(pE1);
    userInput.disabled = true;
    submit.disabled = true
}

function newGame(){
    location.reload();
}