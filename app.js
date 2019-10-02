import compareNumber from './function.js';
// Initialize DOM elements
const guessNumberinput = document.getElementById('guess-number');
const submit = document.getElementById('submit');
const userGuess = document.getElementById('guessed-number');
guessNumberinput.textContent = 4;
let guess = 4;
const correctNumber = 3;

// Set Event handlers
submit.addEventListener('click', () => {
    guess = guess - 1;
    const result = compareNumber(userGuess, correctNumber); 
    if (result === 1) {
        alert('Your Guess is to high, try lower'); 
    }
    else if (result === -1) {
        alert('Your Guess is to low, try higher'); 
    }
    else if (result === 0) {
        alert('Your Guess is Correct, congrats'); 
    }
    guessNumberinput.textContent = guess;
    if (guess === 0) {
        document.getElementById('submit').disabled = true;
    }
});