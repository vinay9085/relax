const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');
const ambientSound = document.getElementById('ambientSound');
let timeLeft = 60; // 1 minute

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    ambientSound.play();
    
    const timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Time's up! 🎉";
            ambientSound.pause();
            // Show post-break ad/upsell
            document.querySelector('.premium').style.display = 'block';
        }
    }, 1000);
});