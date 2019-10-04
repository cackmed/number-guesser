import compareNumber from './function.js';
// Initialize DOM elements
const guessNumberinput = document.getElementById('guess-number');
const submit = document.getElementById('submit');
const userGuess = document.getElementById('user-input-guess');
let guessFeedback = document.getElementById('guess-feedback');
guessNumberinput.textContent = 4;
let guess = 4;
const correctNumber = 3;
//guessFeedback.textContent = 'testing';
// Set Event handlers
submit.addEventListener('click', () => {
    guess = guess - 1;
    const result = compareNumber(userGuess.value, correctNumber); 
   
    if (result === 1) {
        guessFeedback.textContent = ('Your Guess is to high, try lower'); 
    }
    else if (result === -1) {
        guessFeedback.textContent = ('Your Guess is to low, try higher'); 
    }
    else if (result === 0) {
        guessFeedback.textContent = ('Your Guess is Correct, congrats'); 
    }
    guessNumberinput.textContent = guess;
    if (guess === 0) {
        document.getElementById('submit').disabled = true;
    }
    console.log(userGuess.value);
});