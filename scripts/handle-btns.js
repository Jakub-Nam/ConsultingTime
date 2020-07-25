const returnBtn = document.querySelector('#return-btn');

export function toggleTimer() {

    firebase.auth().onAuthStateChanged(user => {

        if (!user) {
            // No user is signed in.
            const timer = document.querySelector('.grid-item-2_timer');
            const toggleBtn = document.querySelector('#toggle-btn');
            const form = document.querySelector('form');
            
            const toggleTimer = getComputedStyle(timer);
            const getTimerDisplay = toggleTimer.display;

            switch (getTimerDisplay) {
                case 'flex':
                    timer.setAttribute('style', 'display: none;');
                    toggleBtn.setAttribute('style', 'display: none');
                    returnBtn.setAttribute('style', 'display: flex');
                    form.setAttribute('style', 'display: flex;');
                    break;
                case 'none':
                    timer.setAttribute('style', 'display: flex;');
                    toggleBtn.setAttribute('style', 'display: flex')
                    returnBtn.setAttribute('style', 'display: none');0
                    form.setAttribute('style', 'display: none;');
                    break;
            }

        } else {
            // User is signed in.
            const groupBtnDays = document.querySelector('.group-days');
            groupBtnDays.setAttribute('style', 'display: flex');

            const toggleBtn = document.querySelector('.grid-item-3_div');
            toggleBtn.setAttribute('style', 'display: none');
        }
    });
}

returnBtn.addEventListener('click', () => {
    toggleTimer();
})
