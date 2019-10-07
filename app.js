import compareNumber from './function.js';
// Initialize DOM elements
const guessNumberinput = document.getElementById('guess-number');
const submit = document.getElementById('submit');
let userGuess = document.getElementById('user-input-guess');
let guessFeedback = document.getElementById('guess-feedback');
guessNumberinput.textContent = 4;
let guess = 4;
const correctNumber = (Math.ceil(Math.random() * 20));
console.log('correct number',correctNumber);
//guessFeedback.textContent = 'testing';
// Set Event handlers
submit.addEventListener('click', () => {
    guess = guess - 1;
    const userInput = Number(userGuess.value);
    let result = compareNumber(userInput, correctNumber); 
    console.log('result,',result);
    if (result === 0) {
        guessFeedback.textContent = ('Your Guess is Correct, congrats!'); 
    }
    if (result === 1) {
        guessFeedback.textContent = ('Your Guess is to high, try lower'); 
    }
    if (result === -1) {
        guessFeedback.textContent = ('Your Guess is to low, try higher'); 
    }
    if (result === 2) {
        guessFeedback.textContent = ('Your guess was an invalid, recheck the rules.');
    }
    guessNumberinput.textContent = guess;
    if (guess === 0 || result === 0) {
        document.getElementById('submit').disabled = true;
    }
    if (guess === 0 || result === 0) { 
        const remover = document.getElementById('reset-button');
        remover.classList.remove('hidden');}
    console.log('userguess',userGuess.value);
});
