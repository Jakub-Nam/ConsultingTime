const consultingDay = document.querySelector('.consultingDay');
const consultingHour = document.querySelector('.consultingHour');

const consultingTime = document.querySelector('.consultingChangeTime');

const toggleBtn = document.querySelector('.toggle-btn')


function toggleTimer() {
    const timer = document.querySelector('.grid-item-2_timer')
    const toggleTimer = getComputedStyle(timer);
    const getTimerDisplay = toggleTimer.display;
    switch (getTimerDisplay) {
        case 'flex':
            timer.setAttribute('style', 'display: none;');
            // form.setAttribute('style', 'display: flex;');
            // login.innerHTML = 'Wróc';
            break;
        case 'none':
            timer.setAttribute('style', 'display: flex;');
            // form.setAttribute('style', 'display: none;');
            // login.innerHTML = 'Zaloguj';
            break;
    }
}

toggleBtn.addEventListener('click', () => {
    toggleTimer();
})