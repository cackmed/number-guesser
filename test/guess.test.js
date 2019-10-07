// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumber from '../function.js';
const test = QUnit.test;

test('compareNumber guess is higher then correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 3;
    const correctNumber = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const userguessisCorrect = compareNumber(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userguessisCorrect, 1);
});
test('compareNumber guess is less then correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 4;
    const correctNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const userguessisCorrect = compareNumber(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userguessisCorrect, -1);
});
test('compareNumber guess is equal to correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 3;
    const correctNumber = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const userguessisCorrect = compareNumber(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userguessisCorrect, 0);
});
