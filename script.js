const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const timerDisplay = document.getElementById('timer');
const ambientSound = document.getElementById('ambientSound');
const soundSelector = document.getElementById('soundSelector');
const progress = document.querySelector('.circular-progress');
let timeLeft = 60; // 1 minute
let timer;

function startTimer() {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    ambientSound.src = soundSelector.value; // Set selected sound
    ambientSound.play();

    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Update progress bar
        const progressValue = ((60 - timeLeft) / 60) * 360;
        progress.style.background = `conic-gradient(#3498db ${progressValue}deg, transparent ${progressValue}deg)`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Time's up! 🎉";
            ambientSound.pause();
            restartBtn.style.display = 'block';
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