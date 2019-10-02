 
// Initialize DOM elements
const guessNumber = document.getElementById('guess-number');
const guessed1 = document.getElementById('guessed');
const userGuess = document.getElementById('user-guess');
guessNumber.textContent = 4;
// Set inital state
let guess = 4;
// Set Event handlers
guessed1.addEventListener('click', () => {
    guess = guess - 1;

    guessNumber.textContent = guess;
    if (guess === 0) {

        document.getElementById('guessed').disabled = true;
    }
    
});

compareNumber(userGuess);
let guessNum = parseInt(userGuess.value);
if (userGuess === 3) {
    alert('Congrats you are correct');
} 
else if (userGuess < 3) {
    alert('Sadly your guess is too high, try lower.');
}   
else if (userGuess > 3) {
    alert('try a higher number');
} 