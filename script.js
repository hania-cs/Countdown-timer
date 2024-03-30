let countdown;
let timerDisplay = document.getElementById('timer');
let timeInput = document.getElementById('timeInput');
let timeLeft;

function startTimer() {
    clearInterval(countdown);
    const seconds = parseInt(timeInput.value);
    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid positive number");
        return;
    }
    timeLeft = seconds;
    displayTimeLeft();
    countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft();
    }, 1000);
}

function displayTimeLeft() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00';
    timeInput.value = '';
}
