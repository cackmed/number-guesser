import compareNumber from './function.js';
// Initialize DOM elements
const guessNumberinput = document.getElementById('guess-number');
const submit = document.getElementById('submit');
<<<<<<< HEAD
let userGuess = document.getElementById('user-input-guess');
let guessFeedback = document.getElementById('guess-feedback');
guessNumberinput.textContent = 4;
let guess = 4;
const correctNumber = (Math.ceil(Math.random() * 20));
=======
const userGuess = document.getElementById('user-input-guess');
let guessFeedback = document.getElementById('guess-feedback');
guessNumberinput.textContent = 4;
let guess = 4;
const correctNumber = 3;
>>>>>>> e5e567924d77a42c34cc0c619dfa5ea97dd2567c
//guessFeedback.textContent = 'testing';
// Set Event handlers
submit.addEventListener('click', () => {
    guess = guess - 1;
<<<<<<< HEAD
    let result = compareNumber(userGuess.value, correctNumber); 
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
=======
    const result = compareNumber(userGuess.value, correctNumber); 
   
    if (result === 1) {
        guessFeedback.textContent = ('Your Guess is to high, try lower'); 
    }
    else if (result === -1) {
        guessFeedback.textContent = ('Your Guess is to low, try higher'); 
    }
    else if (result === 0) {
        guessFeedback.textContent = ('Your Guess is Correct, congrats'); 
>>>>>>> e5e567924d77a42c34cc0c619dfa5ea97dd2567c
    }
    guessNumberinput.textContent = guess;
    if (guess === 0 || result === 0) {
        document.getElementById('submit').disabled = true;
    }
<<<<<<< HEAD
    if (guess === 0 || result === 0) { 
        const remover = document.getElementById('reset-button');
        remover.classList.remove('hidden');}
    console.log(userGuess.value);
});
=======
    console.log(userGuess.value);
});
>>>>>>> e5e567924d77a42c34cc0c619dfa5ea97dd2567c
