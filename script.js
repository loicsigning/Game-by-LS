let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const attemptsMessage = document.getElementById('attemptsMessage');
const restartGame = document.getElementById('restartGame');

// Function to check the user's guess
submitGuess.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
        resultMessage.style.color = 'green';
        attemptsMessage.textContent = `You guessed it in ${attempts} attempts.`;
        restartGame.style.display = 'block';
        submitGuess.disabled = true;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    }
});

// Function to restart the game
restartGame.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    resultMessage.textContent = '';
    attemptsMessage.textContent = '';
    submitGuess.disabled = false;
    restartGame.style.display = 'none';
});
