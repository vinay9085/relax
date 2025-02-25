const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const timerDisplay = document.getElementById('timer');
const ambientSound = document.getElementById('ambientSound');
let timeLeft = 60; // 1 minute
let timer;

function startTimer() {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    ambientSound.play();

    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Time's up! 🎉";
            ambientSound.pause();
            restartBtn.style.display = 'block'; // Show "Start Again" button
        }
    }, 1000);
}

startBtn.addEventListener('click', () => {
    timeLeft = 60; // Reset timer
    timerDisplay.textContent = "01:00"; // Reset display
    startTimer();
});

restartBtn.addEventListener('click', () => {
    timeLeft = 60; // Reset timer
    timerDisplay.textContent = "01:00"; // Reset display
    startTimer();
});