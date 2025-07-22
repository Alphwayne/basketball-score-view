let timer = 0;
let interval;
let isPaused = false; 

function updateScore(scoreId, points) {
    const scoreElement = document.getElementById(scoreId);
    const currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            timer++;
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            document.getElementById('timer').innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    isPaused = true;
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('resumeButton').style.display = 'inline-block';
}

function resumeTimer() {
    isPaused = false;
    document.getElementById('resumeButton').style.display = 'none';
    document.getElementById('pauseButton').style.display = 'inline-block';
    startTimer(); 
}
startTimer();
