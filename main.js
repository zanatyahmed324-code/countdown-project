let m_input = document.getElementById('m-inp');
let s_btn = document.getElementById('s-timer');
let t_display = document.getElementById('timer-display');
let reset = document.getElementById('reset_Btn');

let countdownInterval;

function setTimer() {
    let minutes = parseInt(m_input.value);
    
    if (!isNaN(minutes) && minutes > 0) {
        let totalSeconds = minutes * 60;
        clearInterval(countdownInterval);
        updateDisplay(totalSeconds);
        
        countdownInterval = setInterval(() => {
            totalSeconds--;
            
            if (totalSeconds >= 0) {
                updateDisplay(totalSeconds);
            }
            
            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                t_display.innerText = "Time is up!";
            }
        },1000);
    }
}

function updateDisplay(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    
    let formattedMins = String(mins).padStart(2, '0');
    let formattedSecs = String(secs).padStart(2, '0');
    
    t_display.innerText = `${formattedMins}:${formattedSecs}`;
}

function resetTimer() {
    clearInterval(countdownInterval);
    t_display.innerText = "00:00";
    m_input.value = "";
}

s_btn.addEventListener('click', setTimer);
reset.addEventListener('click', resetTimer);